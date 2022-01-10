/**
 * Created by strggle on 2017/4/1.
 */
var _ = require('lodash');
var SerialPort = require('serialport');
var stk500v2org = require('stk500-v2');
var hex = require('./local-npm/intel-hex');
var Promise = require('bluebird');
var bowser = require('bowser');

var firmwarev2 = function (path, data, progressHandle, callback) {

    var currentStatus = true;
    var errMessage = false;
    var pageSize = 256;
    console.log("serial path " + path);
    var serialPort = new SerialPort(path, {
        baudrate: 115200,
        autoOpen: false
    }, function (err) {
        console.log('打开出错了：', err);
    });

    var options = {
        timeout: 0xc8,
        stabDelay: 0x64,
        cmdexeDelay: 0x19,
        synchLoops: 0x20,
        byteDelay: 0x00,
        pollValue: 0x53,
        pollIndex: 0x03
    };
    var stk500v2OrgInstance = stk500v2org(serialPort);
    var stk500v2 = _.extend({}, stk500v2OrgInstance, {
        sync: function (attempts, done) {
            this.progressHandle = progressHandle;
            this.length = -1;
            this.progress = -1;
            this.baseProgress = -1;
            console.log("stk500v2Instance sync");
            stk500v2OrgInstance.sync.call(this, attempts, done);
        },
        loadAddress: function (useaddr, done) {
            var pageaddr = useaddr << 1;
            var progress = this.baseProgress + (Math.round(pageaddr * 100 / this.length));
            if (this.progress !== progress) {
                this.progress = progress;
                var _this = this;
                this.progressHandle && setTimeout(function () {
                    _this.progressHandle(progress);
                }, 0);
            }
            stk500v2OrgInstance.loadAddress.call(this, useaddr, function (err, result) { console.log("sync done"); done(); });
        },
        upload: function (hex, pageSize, done) {
            this.baseProgress = 0;
            this.length = hex.length;
            stk500v2OrgInstance.upload.call(this, hex, pageSize, done);
        },
    });
    var openSerialPort = Promise.promisify(serialPort.open.bind(serialPort));
    var closeSerialPort = Promise.promisify(serialPort.close.bind(serialPort));
    var setSerialPort = Promise.promisify(serialPort.set.bind(serialPort));
    var sync = Promise.promisify(stk500v2.sync.bind(stk500v2));
    var enterProgrammingMode = Promise.promisify(stk500v2.enterProgrammingMode.bind(stk500v2));
    var upload = Promise.promisify(stk500v2.upload.bind(stk500v2));
    var exitProgrammingMode = Promise.promisify(stk500v2.exitProgrammingMode.bind(stk500v2));

    setTimeout(()=>{
        var promiseHex = Promise.join(
            (function () {
                return  hex.parse(data).data;
            })(),

            openSerialPort()
                .then(function () {
                    console.log("open serial port ok");
                }).delay(1)//以下几步设置串口发送位
                .then(function () {
                    return setSerialPort({
                        rts: true,
                        dtr: true
                    });
                }).delay(1)
                .then(function () {
                    return setSerialPort({
                        rts: false,
                        dtr: false
                    });
                }).delay(1)
                .then(function () {
                    return setSerialPort({
                        rts: true,
                        dtr: true
                    });
                }).delay(1)
                .then(function () {
                    console.log("begin sync");
                    return sync(5);
                }).delay(1)
                .then(function () {//下位机同步,并进入编程模式上
                    console.log("syn ok");
                    return enterProgrammingMode(options);
                }, function (err) {
                    console.log("sync err " + err);
                }).delay(1),

            function (hex) {
                if (bowser.msedge) {
                    hex.slice = Uint8Array.prototype.slice;
                }
                return hex;
            });

        promiseHex.then(function (hex) { //上传hex
                return upload(hex, pageSize);
            })
            .then(function () {console.log(666666);
                return exitProgrammingMode(); //退出编程模式
            })
            .then(function () {
                console.log('yao要关闭了');
                return setSerialPort({
                    rts: false,
                    dtr: false
                });
            },(err)=>{console.log(7777777);
                currentStatus = false;
                console.log(err);
            })
            .done(function (hex) {console.log(88888);
                closeSerialPort();
                callback(null, currentStatus);
            });
    },600);
};

class STK500v2{

    constructor( path,hex) {
        this.hex = hex;
        this.path = path;
        this.log = '';
        this.progressHandler = ()=>{};
        this.succeedHandler =()=>{};
        this.failHandler = ()=>{};
    }

    onComplete(){

    }


    resultCallback(a,bool,message){
        if(bool){
            this.succeedHandler();
            console.log("success-----");
        }
        else {
            this.failHandler();
            console.log("fail-----");
        }
    }


    bootload(){
        firmwarev2(this.path, this.hex, this.progressHandler.bind(this), this.resultCallback.bind(this));

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

module.exports = STK500v2;
