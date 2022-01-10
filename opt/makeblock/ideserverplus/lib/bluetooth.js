/**
 * 蓝牙串口通讯
 */
const childProcess = require('child_process'); // 子进程
var _currentBluetooth = '';
var bluetoothChildProcess; // 蓝牙子进程

var _socket;

function Bluetooth(socket) {
  var self = this;
  _socket = socket;

  /**
   * 是否已连接
   */
  this.isConnected = function(name) {
    if (name) {
      return _currentBluetooth === name;
    } else {
      return _currentBluetooth !== "";
    }
  };

  this.open = function(device) { // 连接蓝牙
    self.createBluetoothChildProcess();
    bluetoothChildProcess.send({
      'method': 'connect',
      'device': device
    });
    console.log('蓝牙已连接');
  };

  this.close = function() { // 断开蓝牙连接
    _currentBluetooth = '';
    if (typeof(bluetoothChildProcess) != 'undefined') {
      self.killBluetoothChildProcess();
    }

    console.log('蓝牙连接已关闭');
    _socket.emit('bluetoothMessage', {
      code: 200
    });

  };

  this.send = function(data) { // 向蓝牙发送数据
    bluetoothChildProcess.send({
      'method': 'writeData',
      'data': data.data
    });
  };

  this.createBluetoothChildProcess = function() { // 创建蓝牙子进程，并托管各消息处理函数
    var childProcessPath = __dirname + '/bluetoothChildProcess.js';
    bluetoothChildProcess = childProcess.fork(childProcessPath);
    // 监控所有子进程过来的消息
    bluetoothChildProcess.on('message', function(message) {
      if (message.method == 'noBluetoothDevices') { // 周围未找到任何蓝牙设备或最后一个蓝牙设备未找到通道
        _socket.emit('bluetoothMessage', message);
        // 关闭子进程
        self.killBluetoothChildProcess();
        _currentBluetooth = '';
      } else if (message.method == 'foundBluetooth') { // 找到一个蓝牙设备
        _socket.emit('bluetoothMessage', message);
      } else if (message.method == 'finishedBluetooth') { // 已完成蓝牙设备的查找
        _socket.emit('bluetoothMessage', message);
        // 关闭子进程
        self.killBluetoothChildProcess();
        _currentBluetooth = '';
      } else if (message.method == 'receivedData') { // 接收数据
        _socket.emit('bluetoothMessage', message);
      } else if (message.method == 'onConnected') { // 进行了连接蓝牙
        _currentBluetooth = message.address;
        console.log('已连接或已断开连接，连接状态是：', message.isConnected);
        if (!message.isConnected) { // 未连接成功
          self.killBluetoothChildProcess();
          _currentBluetooth = '';
        }
        _socket.emit('bluetoothMessage', message);
      }
    });
  };

  this.killBluetoothChildProcess = function() { // 杀死子进程
    bluetoothChildProcess.kill('SIGKILL');
  };

  this.discover = function() { // 发现蓝牙
    self.close(); // 一定要断开蓝牙连接
    self.createBluetoothChildProcess();
    bluetoothChildProcess.send({
      'method': 'inquire'
    });
    _socket.emit('bluetoothMessage', {
      code: 200
    });
  };
}
module.exports = Bluetooth;