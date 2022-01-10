/**
 * Created by Jerry on 2017/6/29.
 */

const WebSocket = require("ws");

let ws = null;
let deviceState = {};
let onlineCheckTimer = 0;

var string2buffer = function (str) {
    var buffer = str.split(" ");
    var out = [];

    buffer.forEach(function(item) {
        out.push(parseInt(item));
    });

    return out;
    // return new Uint8Array(str.split(" "));
};

var buffer2string = function (buf) {
    return Array.prototype.join.call(new Uint8Array(buf), " ");
};

//发送数据
var send = function (data) {
    const buffer = buffer2string(data);
    if (buffer.indexOf('240 255 16 0 15 247') < 0) {
        console.log('已经发送给wifi websocket 数据：', buffer);
    }
    ws && ws.send(buffer, function (error) {
        if (error) {
            console.log("WIFI Send Error :", error);
        }
    });
};

var sendConnectionChangeEvent = function (isConnected) {
    if (isConnected) {
        console.log("Wifi WebSocketClient Opened...");
    } else {
        console.log("Wifi WebSocketClient Closed Or Lost...");
    }
    process.send({
        method: "onConnectChange",
        isConnected: isConnected
    });
};

var sendErrorEvent = function (ex) {
    process.send(Object.assign(ex, {
        method: "error"
    }));
};

//连接hid设备
var connect = function () {
    // 创建WebSocket实例
    const wsUrl = "http://192.168.100.1:8084/";

    let connectionTimeoutTimer = 0;

    ws = new WebSocket(wsUrl);

    if (ws) {
        ws.on("open", function () {
            sendConnectionChangeEvent(true);

            clearTimeout(connectionTimeoutTimer);
        });

        ws.on("message", function (evt) {
            try {
                const message = JSON.parse(evt);

                if (message.type === "block") {
                    process.send({
                        "method": "block",
                        "data": string2buffer(message.data)
                    });
                } else if (message.type === "ping") {
                    clearTimeout(onlineCheckTimer);

                    onlineCheckTimer = setTimeout(function () {
                        console.log('ping :::: 错误了：：：：');
                        sendConnectionChangeEvent(false);

                        sendErrorEvent({
                            msg: "PingLost"
                        });
                    }, 5 * 1000);

                    //console.log("Wifi WebSocket Ping...");
                } else if (message.type === "avblock") {
                    deviceState[message.device] = message.state;
                } else {
                    console.log("Unknow WIFI Message Type " + message.type);

                    process.send({
                        "method": "other",
                        "data": message
                    });
                }

            } catch (ex) {
                console.log('Wifi WebSocketClient Error:', ex, evt);
            }
        });

        ws.on("close", function () {
            console.log('websocket自动断开了');
            sendConnectionChangeEvent(false);
        });

        ws.on("error", function (err) {
            console.log("Wifi WebSocketClient OnError", err);

            sendErrorEvent({
                msg: "Wifi WebSocketClient OnError"
            });
        });

        connectionTimeoutTimer = setTimeout(function () {
            console.log('超时自动断开了：：：：：');
            sendErrorEvent({
                msg: "Connection Timeout"
            });
        }, 1 * 1000);
    }
};

// 主进程传过来的消息
process.on("message", function (message) {
    if (message.method == "connect") {
        connect();
    } else if (message.method == "writeData") {
        send(message.data);
    }
});
