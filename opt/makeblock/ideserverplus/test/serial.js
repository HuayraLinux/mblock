/**
 * 测试串口
 * Created by zhangkun on 2017/3/9.
 */
var io = require('socket.io-client');
var socket = io.connect('http://127.0.0.1:56738');

// 获取串口列表
socket.emit('usbList', function (err, ports) {
    ports.forEach(function (port, i) {
        console.log(port);
    })
});

// 连接串口 demo：/dev/ttyUSB1
setInterval(function () {
    socket.emit('usbClose')
    socket.emit('usbConnect', {port:'/dev/ttyUSB1'})
}, 15000);

socket.on('usbMessage', function (data) {
    console.log(data);
})
