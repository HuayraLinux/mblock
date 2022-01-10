/**
 * USB串口通讯
 * zhangkun
 */
const SerialPort = require("serialport");
const events = require('events');
const childProcess = require('child_process');
const sudoer = require('./sudoCommands.js');


var _currentSerialPort=""
var serialChild, _isopen, opening;
var _socket;
function Serial(socket) {
    _socket = socket;
	var self = this;
    var childProcessPath = __dirname + '/serialChild.js';
    _isopen = false;
	// 需要即时返回，不能有时序
	this.list = function(callback) {
        SerialPort.list(callback);
        _socket.emit('usbMessage', {code:200})
	}

	// 需要即时返回，不能有时序
	this.isConnected = function(name){
        if (name) {
            return (_currentSerialPort === name) && _isopen;
        } else {
            return (_currentSerialPort !== "") && _isopen;
        }
	}

    this.getCurrentSerialPort = function () {
        return _currentSerialPort;
    }
    
	this.close = function(){
        this.killChildProcess();
        console.log('串口连接已关闭');
        _socket.emit('usbMessage', {code:200})
	}

	this.send = function(data){
        if (serialChild && serialChild.connected) {
            serialChild.send({func: 'write()', data: data.data, port: data.port, callback: data.callback});
        }
        _socket.emit('usbMessage', {code:200})
	}

    this.set = function(data){
        console.log(data);
        if (serialChild && serialChild.connected) {
            serialChild.send({func: 'set()', data: data.data, port: data.port});
        }
        _socket.emit('usbMessage', {code:200})
    }


    /**
	 * 创建串口子进程伴随着看门狗检查串口状态
     */
	this.createChildProcess = function () {
		serialChild = childProcess.fork(childProcessPath);
        serialChild.on('message', function (rtn) {
			if (typeof(rtn.isopen) != "undefined") {
				if (_isopen != rtn.isopen) {
                    _isopen = rtn.isopen;
                    _socket.emit('usbMessage', {'isopen':rtn.isopen});
				}
			}
        });
        opening = setInterval(function() {  // 维持连接状态
            if (!serialChild || !serialChild.connected) {
                clearInterval(opening);
            	return;
			}
            serialChild.send({ func: 'isOpen()', port:_currentSerialPort});
        }, 3000);
    }

    /**
	 * 杀死子进程
     * @param name
     */
    this.killChildProcess = function () {
        if (serialChild && serialChild.connected) {
            clearInterval(opening);
            serialChild.kill('SIGKILL');
        }
        _isopen = false;
        _currentSerialPort = "";
    }

	this.open = function(name){ // linux : /dev/ttyUSB0
        _currentSerialPort = name;
        setTimeout(function () {
        	self.createChildProcess();
        	console.log('串口已连接');
            serialChild.on('message', function(rtn) {
                if (!rtn.method) {
                    _socket.emit('d', {code:200});
                    return;
                }
                switch (rtn.method) {
                    case 'open':
                        _socket.emit('usbMessage', {code:200, method:'open'});
                        break;
                    case 'error':
                        childProcess.exec("groups `whoami`", function (error, stderr, stdout) {
                            if (error) {
                                sudoer.enableSerialInLinux(function (error, stderr, stdout) {});
                                self.killChildProcess();
                                _socket.emit('usbMessage', {code:200, method: 'error'});
                                return;
                            }
                            if (stderr.indexOf('dialout ') > -1) {
                                self.killChildProcess();
                                _socket.emit('usbMessage',{code:555, method: 'error', message:'restart your computer'});
                                return;
                            } else {
                                sudoer.enableSerialInLinux(function (error, stderr, stdout) {});
                                self.killChildProcess();
                                _socket.emit('usbMessage', {code:200, method: 'error'});
                                return;
                            }
                        });
                        break;
                    case 'locked':
                        _socket.emit('usbMessage', {code:200, method: 'locked'});
                        self.killChildProcess();
                        break;
                    case 'data':
                        _socket.emit('usbMessage', {code:200, method: 'data', data:rtn.data});
                        break;
                    case 'close':
                        _socket.emit('usbMessage', {code:200, method: 'close'});
                        self.killChildProcess();
                        break;
                    case 'disconnect':
                        _socket.emit('usbMessage', {code:200, method: 'disconnect'});
                        self.killChildProcess();
                        break;
                    default:
                        self.killChildProcess();
                        break;
                }
            });
            // 解决库不稳定问题
            serialChild.on('disconnect', function () {
                console.log('serial child disconnect.');
                _socket.emit('usbMessage', {code:200, method: 'disconnect'});
                self.killChildProcess();
            });

            serialChild.send({ port: name });
        }, 500);
	}
}


module.exports = Serial;
