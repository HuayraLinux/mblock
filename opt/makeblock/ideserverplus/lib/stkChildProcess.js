/**
 * 刷固件和上传arduino子进程
 */
var stk500v1 = require('./firmwares/stk500v1');
var stk500v2 = require('./firmwares/stk500v2');

process.on('message', function(message) { // 主进程传过来的消息
    if (message.method == 'firmwaresBootload') { // 刷固件和上传arduino
        if (message.data.type == 'STK500v1') {
            var firmware = new stk500v1(message.data.path, message.data.data);
            firmware.progress((percent) => {
                process.send({
				    'method': 'firmwaresProgress',
				    'percent': percent
			    });
            }).succeed(() => {
                process.send({
                	'method' : 'firmwaresSucceed'
                });
            }).fail(() => {
                process.send({
                	'method' : 'firmwaresFail'
                });
            }).bootload();
        } else if (message.data.type == 'STK500v2') {
            var firmware = new stk500v2(message.data.path, message.data.data);
            firmware.progress((percent) => {
                process.send({
				    'method': 'firmwaresProgress',
				    'percent': percent
			    });
            }).succeed(() => {
                console.log('刷刷刷，成功了');
                process.send({
                	'method' : 'firmwaresSucceed'
                });
            }).fail(() => {
                process.send({
                	'method' : 'firmwaresFail'
                });
            }).bootload();
        }
    }
});