const USBHID = require("node-hid");
// const events = require('events');
const sudoer = require('./sudoCommands.js');
/**
 * 2.4G无线串口通讯： HID设备连接、数据收发
 */
var _port;
var _canSend = true; // 是否可以发送，需要等待收到返回的数据后，才能再次发送，默认true：可以发送；false：不能发送

//发送数据
var send = function(data){
	if(_port) {
		if (true) { //直接设置为true，取消等待返回再发送
			var buffer = new Buffer(data)
			var arr = [0,buffer.length];
			for(var i=0;i<buffer.length;i++) {
				arr.push(buffer[i]);
			}
			_canSend = false; //已发送，需要等待收到返回的数据后，才能再次发送
			try {
				//console.log('write to hid:',data);
				_port.write(arr);
			} catch (error) {
				console.log('2.4G robot-comm write error:');
				console.log(error);
				//_socket.emit('hidMessage', {code: 404, message: ''});
			}
		} else {
			//process.send({'method':'error', 'code':404, 'message':'the 2.4G cannot connect to machine !', 'type':'0'});
		}
	} else {
		process.send({'method':'onConnected', 'isConnected':false});
	}
};

//连接hid设备
var connect = function() {
	var devices = USBHID.devices();
	var isDeviceFound = false;
	for(var i in devices) {
		var device = devices[i];
		if(device.vendorId==0x0416&&device.productId==0xffff){
			isDeviceFound = true;
			break;
		}
	}
	if(!isDeviceFound) {
        process.send({'method':'error', 'code': 404, 'message':'Cannot find 2.4G dongle', 'type':'2'});
		return;
	}
	
	try {
        _port = new USBHID.HID(0x0416,0xffff);
    } catch (error) {
        if(process.platform == 'linux') { // 没有权限
			sudoer.enableHIDInLinux(function(error, stdout, stderr) {
				if( error === null ) { // 密码输对
					process.send({code: 500, type: '1', message:'Please restart your computer to enable 2.4G device.'});
				} else { // 密码输错
					process.send({code:500, type:'4', message:error.message});
				}
			});
		} else {
            process.send({'method':'error', 'code': 500, 'message':'Cannot connect to the 2.4G device. Please check your USB connection or use another USB port.', 'type':'3'});
		}
		return;
	}

    if(!_port) {
        process.send({code: 404, message:'Cannot find 2.4G dongle', type:'2'});
        return;
    }
		// _isConnected = true;
    _port.on('error', function(err) {
		console.log('2.4G child process connect is error :', err);
        _canSend = true; // 重置
        process.send({'method':'onConnected', 'isConnected':false}); // 关闭连接
    });

    _port.on('data', function(data){ // 2.4G接受到了数据
        if(data[0] > 0) {
			_canSend = true;
			var arr=[];
			for(var i=0;i<data[0];i++){
                arr.push(data[i+1]);
		    }
            process.send({'method' : 'receivedData', 'data' : arr});
        }
    });

    console.log('2.4G已连接');
    process.send({'method':'onConnected', 'isConnected':true});
};

process.on('message', function (message) { // 主进程传过来的消息
    if (message.method == 'connect') { // 连接hid
        connect();
	} else if (message.method == 'writeData') { // hid写入数据
        send(message.data);	
	}
	
});