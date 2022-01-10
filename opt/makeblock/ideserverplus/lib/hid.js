
const childProcess = require('child_process'); // 子进程
var hidChildProcess; // 2.4G子进程

/**
 * 2.4G无线串口通讯： HID设备连接、数据收发
 */
// var _port;
var _isConnected = false; // 是否已连接;默认false：未连接，true：已连接

var _socket;
function HID(socket){
	var self = this;
	_socket = socket;

	//返回hid设备列表
	this.list = function(callback) {
		// callback(USBHID.devices());
        // _socket.emit('hidMessage', {code: 200});
	}
	
	//hid设备是否已连接
	this.isConnected = function() {
		return _isConnected;
	}

	//断开hid设备连接
	this.close = function(){
		if (typeof(hidChildProcess) != 'undefined') {
            hidChildProcess.kill('SIGKILL');
		}
		_isConnected = false;
		console.log('2.4G连接已关闭');
		_socket.emit('hidMessage', {'method':'onConnected', 'isConnected':_isConnected});
	}

	//向hid发送数据
    this.send = function(data){
		if (typeof(hidChildProcess) != 'undefined') {
			if (!hidChildProcess.killed) {
                hidChildProcess.send({'method':'writeData', 'data':data.data});
			}
		}
	}

	//连接hid设备
	this.open = function(fn) {
        hidChildProcess = childProcess.fork(__dirname + '/hidChildProcess.js');
        hidChildProcess.send({'method':'connect'});
		console.log('Hid is ready to connect');
        
        hidChildProcess.on('message', function (message) {
			console.log('Hid child process return message is :', message);
			if (message.method == 'error') { // 子进程发生了错误或有错误提示
				console.log('hid child process is error and is message see up ↑');
				// 关闭子进程
				hidChildProcess.kill('SIGKILL');
                _isConnected = false;
				// 无法与机器人通信（端口连接，并提示是否确认已连接上2.4G）
                _socket.emit('hidMessage', message);
			} else if (message.method == 'onConnected') { // 进行了连接
                console.log('2.4G已连接或已断开连接，连接状态是：', message.isConnected);
				if (!message.isConnected) {// 未连接成功
                    hidChildProcess.kill('SIGKILL');
				}
				_isConnected = message.isConnected;
                _socket.emit('hidMessage', message);
            } else if (message.method == 'receivedData') { // 接受2.4G数据（传感器->2.4G串口->2.4G子进程->2.4G主进程->前端表现）
                _socket.emit('hidMessage', message);
			}
		});
	}
}
module.exports = HID;