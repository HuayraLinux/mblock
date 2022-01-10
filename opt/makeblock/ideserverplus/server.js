/**
 * Created by zhangkun on 2017/3/8.
 */

var server = require('http').createServer();
var io = require('socket.io')(server);
var Serial = require('./lib/serial'),
    Bluetooth = require('./lib/bluetooth'),
    Hid = require('./lib/hid'),
    Wifi = require("./lib/wifi");
var Stk = require('./lib/stk.js');
var closeAllConnections;
var closeAllConnectionsWifi;
io.on('connection', function (client) {
    var _serial = new Serial(client),
        _bluetooth = new Bluetooth(client),
        _hid = new Hid(client),
        _wifi = new Wifi(client);
    var _stk = new Stk(client);

    closeAllConnections = function () {
        _serial.close();
        _bluetooth.close();
        _hid.close();
        _wifi.close();
    };
    closeAllConnectionsWifi = function () {
        _serial.close();
        _bluetooth.close();
        _hid.close();
        _wifi.close(true);
    };

    // 返回版本号
    client.on('getPluginVersion', function () {
        client.emit('pluginVersion', {'version': '1.0'});
    });

    // 蓝牙通信
    client.on('bluetoothConnect', function (data) {
        console.log('Into bluetoothConnect ==========================>', data);
        if (_bluetooth.isConnected(data.address)) {
            return;
        }
        closeAllConnections();
        _bluetooth.open(data);
    });
    client.on('bluetoothClose', function () {
        console.log('Into bluetoothClose ==========================>');
        _bluetooth.close();
    });
    client.on('bluetoothSend', function (data) {
        console.log('Into bluetoothSend ==========================>', data);
        _bluetooth.send(data);
    });
    client.on('bluetoothDiscover', function () {
        console.log('Into bluetoothList ==========================>');
        _bluetooth.discover();
    });

    // 串口通信
    client.on('usbConnect', function (data) {
        console.log('Into usbConnect ==========================>', data);
        if (_serial.isConnected(data.port)) {
            return;
        }
        closeAllConnections();
        _serial.open(data.port);
    });
    client.on('usbClose', function () {
        console.log('Into usbClose ==========================>');
        _serial.close();
    });
    client.on('usbSend', function (data) {
        console.log('Into usbSend ==========================>', data);
        _serial.send(data)
    });
    client.on('usbSet', function (data, fn) {
        // set方法暂时移除回调，今后插件升级时再加上回调
        console.log('Into usbSet ==========================>', data);
        _serial.set(data);
    });
    client.on('usbList', function (fn) {
        console.log('Into usbList ==========================>');
        _serial.list(fn);
    });
    client.on('usbCurrentPort', function () {
        console.log('Into usbCurrentPort ==========================>');
        _serial.getCurrentSerialPort();
    });

    // 2.4G通信
    client.on('hidConnect', function () {
        console.log('Into hidConnect ==========================>');
        if (_hid.isConnected()) {
            return;
        }
        closeAllConnections();
        _hid.open();
    });
    client.on('hidClose', function () {
        console.log('Into hidClose ==========================>');
        _hid.close();
    });
    client.on('hidSend', function (data) {
        console.log('Into hidSend ==========================>', data);
        _hid.send(data);
    });
    client.on('hidList', function (fn) {
        console.log('Into hidList ==========================>');
        _hid.list(fn);
    });

    // WIFI通信
    client.on("wifiConnect", function () {
        if (_wifi.isConnected()) {
            return;
        }
        closeAllConnectionsWifi();

        _wifi.open();
    });
    client.on("wifiClose", function () {
        _wifi.close();
    });
    client.on("wifiSend", function (messageBuffer) {
        if (messageBuffer && messageBuffer.data) {
            var dataBlock = messageBuffer.data;

            if (dataBlock.type === "Buffer") {
                _wifi.send(dataBlock.data);
            }
        }
    });

    // 刷固件
    client.on('firmwaresBootload', function (data) {
        if (data) {
            closeAllConnections();
            _stk.firmwaresBootload(data);
            /*
            if (data.type == 'STK500v1') {
                var firmware = new stk500v1(data.path, data.data);
                firmware.progress((percent) => {
                    client.emit('firmwaresMessage', {'method': 'firmwaresProgress', 'percent': percent});
                }).succeed(() => {
                    console.log('唰唰唰，成功');
                    client.emit('firmwaresMessage', {'method': 'firmwaresSucceed'});
                }).fail(() => {
                    client.emit('firmwaresMessage', {'method': 'firmwaresFail'});
                }).bootload();
            } else if (data.type == 'STK500v2') {
                var firmware = new stk500v2(data.path, data.data);
                firmware.progress((percent) => {
                    client.emit('firmwaresMessage', {'method': 'firmwaresProgress', 'percent': percent});
                }).succeed(() => {
                    console.log('刷刷刷，成功了');
                    client.emit('firmwaresMessage', {'method': 'firmwaresSucceed'});
                }).fail(() => {
                    client.emit('firmwaresMessage', {'method': 'firmwaresFail'});
                }).bootload();
            }*/
        }
    });
    client.on('disconnect', function () {
        console.log('soket连接断开时，关闭后端所有的端口连接');
        closeAllConnections();
    });

});

console.log('Robot-Comm start...');
server.listen(56738, '127.0.0.1');