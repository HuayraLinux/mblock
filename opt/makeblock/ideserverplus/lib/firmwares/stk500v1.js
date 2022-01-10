
var _ = require('lodash');
var SerialPort = require('serialport');
var stk500 = require('stk500');
var hex = require('./local-npm/intel-hex');
var sendCommand = require('../../node_modules/stk500/lib/sendCommand.js');
var Statics = require('../../node_modules/stk500/lib/statics.js');
var Promise = require('bluebird');

//stk500v1扩展
var stk500v1 = _.extend({}, stk500, {
    bootload: function (stream, hex, opt, progressHandle, done) {
        this.progressHandle = progressHandle;
        this.length = -1;
        this.progress = -1;
        this.baseProgress = -1;
        console.log('stk500v1 bootload')
        stk500.bootload.call(this, stream, hex, opt, done);
    },
    loadAddress: function (stream, useaddr, timeout, done) {

        console.log('stk500v1 loadAddress')
        var progress = this.baseProgress + (Math.round(useaddr * 100 / this.length));
        if (this.progress !== progress) {
            this.progress = progress;
            var _this = this;
            this.progressHandle && setTimeout(function () {
                _this.progressHandle(progress);
            }, 0);
        }
        stk500.loadAddress.call(this, stream, useaddr, timeout, done);
    },
    upload: function (stream, hex, pageSize, timeout, done) {
        console.log('stk500v1 uoload')
        //this.progress = 0;
        this.baseProgress = 0;
        this.length = hex.length;
        stk500.upload.call(this, stream, hex, pageSize, timeout, done);
    },
    verify: function (stream, hex, pageSize, timeout, done) {
        console.log('stk500v1 verify')
        //this.progress = 50;
        this.baseProgress = 50;
        this.length = hex.length;
        stk500.verify.call(this, stream, hex, pageSize, timeout, done);
    },
    verifyPage : function (stream, writeBytes, pageSize, timeout, done) { // 覆盖第三方类库的方法，因为报错
        console.log("verify page");
        var self = this;
        match = Buffer.concat([
        new Buffer([Statics.Resp_STK_INSYNC]),
        writeBytes,
        new Buffer([Statics.Resp_STK_OK])
        ]);

        var size = writeBytes.length >= pageSize ? pageSize : writeBytes.length;

        var opt = {
        cmd: [
          Statics.Cmnd_STK_READ_PAGE,
          (size>>8) & 0xff,
          size & 0xff,
          0x46
        ],
        responseLength: match.length,
        timeout: timeout
        };
        sendCommand(stream, opt, function (err, data) {
        // console.log('confirm page', err, data, data.toString('hex')); // 此句如果data为undefined时，会报错，导致程序挂掉
        done(err, data);  
        });
    }
});

var firmwarev1 = function (path, data, progressHandle, callback, _client) {

    var errMessage = false;
    var serialPort = new SerialPort(path, {
        baudrate: 115200,
        autoOpen: false
    }, ()=>null);

    var openSerialPort = Promise.promisify(serialPort.open.bind(serialPort));

    var closeSerialPort = Promise.promisify(serialPort.close.bind(serialPort));

    var setSerialPort = Promise.promisify(serialPort.set.bind(serialPort));


    var bootload = Promise.promisify(stk500v1.bootload.bind(stk500v1));
    console.log(1);
    let currentStatus = true;

    setTimeout(()=>{
        Promise.join(
            (function () {
                return  hex.parse(data).data;
            })(),
            openSerialPort()
                .then(function () {
                    console.log(2);
                    return setSerialPort({
                        rts: true,
                        dtr: true
                    });
                }).delay(1)
                .then(function () {
                    console.log(3);
                    return setSerialPort({
                        rts: false,
                        dtr: false
                    });
                }).delay(1)
                .then(function () {
                    console.log(4);
                    return setSerialPort({
                        rts: true,
                        dtr: true
                    });
                }).delay(1),
            function (hex) {
                console.log(5);
                return hex;
            })
            .then(function (hex) {
                console.log(6);
                var options = {
                    signature: new Buffer([0x1e, 0x95, 0x0f]),
                    pageSize: 128,
                    timeout: 1000
                };
                return bootload(serialPort, hex, options, progressHandle);
            })
            .then(function () {
                console.log(7);
                return setSerialPort({
                    rts: false,
                    dtr: false
                });
            },(err)=>{
                if(err){
                    console.dir(err);
                    if(err.message.indexOf('3020')>-1){
                        console.log("______一般是固件协议不匹配");
                        // 一般是固件协议不匹配
                    }else if(err.message.indexOf('timeout')>-1){
                        console.log("______一固件协议匹配:timeout");
                    }
                    currentStatus = false;
                }
            })
            .done(function () {
                console.log(8);
                closeSerialPort();
                callback(null, currentStatus);
            });
    },600);
};


var client = {send: function () {

}}
class STK500v1 {

    constructor( path,hex) {
        // super(props);
        this.hex = hex;
        this.path = path;
        this.log = '';
        this.progressHandler = ()=>{};
        this.succeedHandler =()=>{};
        this.failHandler = ()=>{};
    }

    onComplete(){

    }


    resultCallback(a,bool){
        if(bool){
            this.succeedHandler();
        }
        else {
            this.failHandler();
        }
    }


    bootload(){
        
        firmwarev1(this.path, this.hex, this.progressHandler.bind(this), this.resultCallback.bind(this), client);
    }



    progress(handler){

        this.progressHandler = handler;
        return this;
    }

    succeed(handler){

        this.succeedHandler = handler;
        return this;
    }

    fail(handler){

        this.failHandler  = handler;
        return this;
    }
}
module.exports = STK500v1;
