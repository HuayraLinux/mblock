/* 
 * 刷固件和上传arduino通讯
 */
const childProcess = require('child_process'); // 子进程
var stkChildProcess; // 刷固件和上传arduino子进程

var _socket;
var _self;

function Stk(socket) {
    _self = this;
    _socket = socket;

    this.firmwaresBootload = function(data) {
        // 创建子程序来刷固件
        var childProcessPath = __dirname + '/stkChildProcess.js';
        stkChildProcess = childProcess.fork(childProcessPath);

        stkChildProcess.on('message', function (message) { // 监控所有子进程过来的消息
        	_socket.emit('firmwaresMessage', message);
            // if (message.method == 'firmwaresProgress') {
            //     _socket.emit('firmwaresMessage', message);
            // } else if (message.method == 'firmwaresSucceed') {
            //     _socket.emit('firmwaresMessage', message);
            //     _self.killStkChildProcess();
            // } else if (message.method == 'firmwaresFail') {
            //     _socket.emit('firmwaresMessage', message);
            //     _self.killStkChildProcess();
            // }
        })

        stkChildProcess.send({
        	'method' : 'firmwaresBootload',
        	'data' : data
        });
    };

    this.killStkChildProcess = function () { // 杀死子进程
        stkChildProcess.kill('SIGKILL');
    };
}

module.exports = Stk;