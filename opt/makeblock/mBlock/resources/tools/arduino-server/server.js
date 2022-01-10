const ListeningPort = process.env.ARDUINO_SERVER_PORT || 56739

var fork = require('child_process').fork;
var io = require('socket.io')(ListeningPort);
const spawn = require('child_process').spawn;
var path = require('path');

var compilingSocketQueue = [];

var isCompiling = false;

io.on('connection', function(socket) {
    socket.on('compile', function(param) { 
        socket.source = param.source;
        socket.board = param.board;
        socket.extensionArr = param.extensionArr;
        compilingSocketQueue.push(socket);
        if(!isCompiling) {
            startCompiling();
        }
        else {
            // tell the users how many users is before him/her
            emitQueueMessage(socket, compilingSocketQueue.length);
        }
    });
});

// start x11 server for linux
if (process.env.X11_MODE_ARDUINO) {
    spawn('Xvfb', [':1', '-screen', '0', '1024x768x16'], {detached: true});
}

var emitQueueOrderToEachSocket = function() {
    for(var i=0; i<compilingSocketQueue.length; i++) {
        emitQueueMessage(compilingSocketQueue[i], i);
    }
}

var emitQueueMessage = function(socket, order) {
    socket.emit('queue', order);
    socket.emit('log', 'queueing for compile, position: ' + order);
}

var compileCode = function(socket) {
    var child = fork(path.resolve(__dirname, './compilerProcess.js'));
    var closeSocketAndProcess = function() {
        child.kill();
        socket.disconnect(true);
        startCompiling();
    }
    child.on('message', function(data){
        if (data.hex) {
            socket.emit('result', data);
            closeSocketAndProcess();
        }
        else if (data.failed) {
            socket.emit('failed', data.failed);
            closeSocketAndProcess();
        }
        else if (data.log) {
            socket.emit('log', data.log);
        }
    });

    socket.on('disconnect', function() {
        closeSocketAndProcess();
    })

    child.send({
        code: socket.source,
        board: socket.board,
        extensionArr:socket.extensionArr
    });
}

var startCompiling = function() {
    isCompiling = true;
    var socket = compilingSocketQueue.shift();
    if(!socket) {
        isCompiling = false;
        return;
    }
    emitQueueOrderToEachSocket();
    compileCode(socket);
}