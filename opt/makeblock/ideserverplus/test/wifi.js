var io = require("socket.io-client");
var socket = io.connect("http://127.0.0.1:56738");

console.log("Connecting to http://127.0.0.1:56738");

socket.on("connect", function () {
    console.log("Connected to http://127.0.0.1:56738");

    socket.on("wifiMessage", function (msg) {
        console.log("WifiMessage", msg);

        if (msg.method === "onConnectChange" && msg.isConnected === true) {
            console.log("连接WIFI成功");

            socket.emit("wifiSend", {
                data: [255, 85, 8, 0, 2, 34, 45, 6, 1, 244, 1]
            });
        } else if (msg.method === "onConnectChange" && msg.isConnected === false) {
            console.log("断开WIFI成功");
        }
    });

    socket.emit("wifiConnect");

    setTimeout(function () {
        socket.emit("wifiClose");
    }, 60 * 1000);
});


