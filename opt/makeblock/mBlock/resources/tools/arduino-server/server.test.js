require('./server.js');
const path = require('path');
const fs = require('fs-extra');
const io = require('socket.io-client');
var socket;

// Because Arduino compiling takes time, 
// increase the time allowed for unit test.
jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;

var connectSocket = function() {
    return io.connect('http://127.0.0.1:56739');
}

var issueCompileCommand = function() {
    socket.emit('compile', {
        board: 'mcore_uno',
        source: 'void loop(){}\nvoid setup(){}'
    });
}

// before each unit test, 
// create Arduino compiling cache
// and connect a clean socket
// CAUTION: the socket will be automatically disconnected
// when a compiling session is done!
beforeEach(() => {
    socket = connectSocket();
});

afterEach(() => {
    socket.close();
    clearAllCache();
})

test('compile Arduino code', done => {
    clearAllCache();
    socket.on('result', function(data) {
        expect(data.hex).toBe(expectedArduinoHex);
        done();
    });
    issueCompileCommand();
});

test('can emit log', done => {
    var hasReceivedLog = false;
    socket.on('result', function(data) {
        expect(hasReceivedLog).toBe(true); 
        done();
    });
    socket.on('log', function(content) {
        hasReceivedLog = true;
    });
    issueCompileCommand();
});

test('can cache results', done => {
    var hasCompiledOnce = false;
    var hasReceivedLog = false;
    var compileOnce = () => {
        socket.on('result', function(data) {
            // compile two times to see if the result it cached properly.
            if (!hasCompiledOnce) {
                hasCompiledOnce = true;
                hasReceivedLog = false;
                // CAUTION: the socket will be automatically disconnected
                // when a compiling session is done!
                socket = connectSocket();
                compileOnce();
            }
            else {
                expect(data.hex).toBe(expectedArduinoHex);
                expect(hasReceivedLog).toBe(true); 
                done();
            }
        });
        socket.on('log', function(data){
            hasReceivedLog = true;
        });
        issueCompileCommand();
    }
    
    compileOnce();
    // another time is issued when the first run is done.
});

test('can queue requests', () => {
    var compileOnce = () => {
        issueCompileCommand();
    }
    socket.on('queue', function(before) {
        expect(before).toBe(1);
        done();
    });
    compileOnce();
    compileOnce();
});

const expectedArduinoHex = ":100000000C9434000C9446000C9446000C9446006A\r\n:100010000C9446000C9446000C9446000C94460048\r\n:100020000C9446000C9446000C9446000C94460038\r\n"+
        ":100030000C9446000C9446000C9446000C94460028\r\n:100040000C945A000C9446000C9446000C94460004\r\n:100050000C9446000C9446000C9446000C94460008\r\n"+
        ":100060000C9446000C94460011241FBECFEFD8E03C\r\n:10007000DEBFCDBF21E0A0E0B1E001C01D92A930FC\r\n:10008000B207E1F70E944B000C94DF000C940000D3\r\n"+
        ":100090000895089508950E94A4000E944A000E94B5\r\n:1000A0004900C0E0D0E00E9448002097E1F30E94A0\r\n:1000B0000000F9CF1F920F920FB60F9211242F93C9\r\n:"+
        "1000C0003F938F939F93AF93BF9380910101909142\r\n:1000D0000201A0910301B09104013091000123E0DD\r\n:1000E000230F2D3720F40196A11DB11D05C026E870\r\n"+
        ":1000F000230F0296A11DB11D2093000180930101E1\r\n:1001000090930201A0930301B09304018091050133\r\n:1001100090910601A0910701B09108010196A11DDF\r\n"+
        ":10012000B11D8093050190930601A0930701B09340\r\n:100130000801BF91AF919F918F913F912F910F90A7\r\n:100140000FBE0F901F901895789484B5826084BD7F\r\n"+
        ":1001500084B5816084BD85B5826085BD85B58160CB\r\n:1001600085BDEEE6F0E0808181608083E1E8F0E02B\r\n:100170001082808182608083808181608083E0E85A\r\n"+
        ":10018000F0E0808181608083E1EBF0E08081846039\r\n:100190008083E0EBF0E0808181608083EAE7F0E03B\r\n:1001A000808184608083808182608083808181609F\r\n"+
        ":1001B00080838081806880831092C1000895F894C4\r\n:0201C000FFCF6F\r\n:00000001FF\r\n";

const clearAllCache = function() {
    var fileNames = fs.readdirSync('./cache');
    for(var i=0;i<fileNames.length;i++) {
        if(fileNames[i] !== '.gitkeep') {
            fs.removeSync(path.join('./cache', fileNames[i]));
        }
    }
}


