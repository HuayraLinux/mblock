/**
 * Created by Jerry on 2017/6/29.
 */


const childProcess = require("child_process"); // 子进程

let wifiChildProcess; // WIFI子进程
let isConnected = false; // 是否已连接;默认false：未连接，true：已连接

function wifi(socket) {
    //Wifi设备是否已连接
    this.isConnected = function () {
        return isConnected;
    };

    //断开Wifi设备连接
    this.close = function (keepLoading=false) {
        if (wifiChildProcess) {

            wifiChildProcess.kill("SIGKILL");

            wifiChildProcess = null;
        } else {
            return;
        }

        isConnected = false;

        console.log("Wifi连接已关闭");

        socket.emit("wifiMessage", {"method": "onConnectChange", "isConnected": isConnected,"keepLoading":keepLoading});
    };

    //向Wifi发送数据
    this.send = function (data) {
        var string = data.toString('utf-8');
        if (string.indexOf('240,255,16,0,15,247') < 0) {
            console.log('准备向wifi子进程发送数据：：：：');
        }
        if (typeof(wifiChildProcess) != "undefined" && !wifiChildProcess.killed) {
            if (string.indexOf('240,255,16,0,15,247') < 0) {
                console.log('已经发送给子进程wifi数据：：：：', string);
            }
            wifiChildProcess.send({"method": "writeData", "data": data});
        }
    };

    //连接Wifi设备
    this.open = function () {
        wifiChildProcess = childProcess.fork(__dirname + "/wifiChildProcess.js");

        wifiChildProcess.send({"method": "connect"});

        wifiChildProcess.on("message", function (message) {
            //console.log("Receive From Wifi ChildProcess :", message);
            // 子进程发生了错误或有错误提示
            if (message.method === "error") {
                // 关闭子进程
                wifiChildProcess.kill("SIGKILL");
                isConnected = false;
                // 无法与机器人通信（端口连接，并提示是否确认已连接上WIFI）
                socket.emit("wifiMessage", message);
            } else if (message.method === "onConnectChange") {
                // 如果未连接成功
                if (!message.isConnected) {
                    wifiChildProcess.kill("SIGKILL");
                }
                isConnected = message.isConnected;
                socket.emit("wifiMessage", message);
            } else {
                // 接受WIFI数据（传感器->WIFI子进程->WIFI主进程->前端表现）
                socket.emit("wifiMessage", message);
            }
        });
    }
}
module.exports = wifi;
