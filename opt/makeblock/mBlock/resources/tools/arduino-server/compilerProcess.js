const path = require('path');
const fs = require('fs-extra');
const spawn = require('child_process').spawn;
var crypto = require('crypto');
var uuid = require('node-uuid');

var ArduinoIDE = {

    compileCode: function(code, board,extensionArr) {
        var self = this;
        var buildPath = this.getBuildPath(code, board);
        //extension have compilied,need to empty folder to start a new compiling
        extensionArr&&extensionArr.length&&fs.existsSync(buildPath)&&fs.emptyDirSync(buildPath);

        // directly return the code if build file exists.
        if(fs.existsSync(buildPath) && fs.existsSync(this.getHexFilePath(buildPath))
            && fs.existsSync(this.getLogFilePath(buildPath))) {
            this.sendLogToClient(
                    fs.readFileSync(this.getLogFilePath(buildPath)).toString());
            this.sendHexResultToClient(
                    fs.readFileSync(this.getHexFilePath(buildPath)).toString());
            return;
        }

        // if hasn't been compiled before, start a new compiling
        if(!fs.existsSync(buildPath)) {
            fs.mkdirSync(buildPath);
            this.copyExtensionFile(extensionArr,buildPath);
        }
        
        // let sketchPath = this.makeSketchPath();
        fs.writeFileSync(this.getInoFilePath(buildPath), code);
        
        var combinedLog = '';
        var appendLog = function(log) {
            log = log.toString();
            combinedLog += log;
            self.sendLogToClient(log);
            if(log.indexOf('error:') > -1){
                self.sendErrorToClient('compile failed. Please see logs above');
            }
        };
        var options;
        if(process.env.X11_MODE_ARDUINO) {
            options = {env: {DISPLAY: ':1.0'}};
        }
        else {
            options = {};
        }
        var arduinoProcess = spawn(this.getArduinoExecutable(), 
                                   this.getArduinoCommandArguments(board, buildPath),
                                   options);
        arduinoProcess.stdout.on('data', function(data) {
            appendLog(data);
        });
        arduinoProcess.stderr.on('data', function(data) {
            appendLog(data);
        });
        arduinoProcess.on('close', function(code){
            if (code == 0) {
                // cache arduino log
                fs.writeFileSync(self.getLogFilePath(buildPath), combinedLog);
                // read (already cached) arduino hex file
                var hexResult = fs.readFileSync(self.getHexFilePath(buildPath)).toString()
                if(hexResult) {
                    self.sendHexResultToClient(hexResult);
                }
                else {
                    self.sendErrorToClient('compile failed. Please see logs above');
                }
            }
            else {
                self.sendErrorToClient(code);
            }
        });
    },
    copyExtensionFile(arr,buildPath){
        arr.forEach((item)=>{
            fs.copy(item.srcPath,buildPath,function (err) {
                    if(err){
                        console.error(err);
                    }
                    console.log('success!');
                })
        })
    },

    getArduinoCommandArguments: function(board, buildPath) {
        var arduinoCommandArguments = [
            '--board', this.getUploadBoardParameter(board),
            '--pref', 'build.path=' + buildPath,
            '--verify', this.getInoFilePath(buildPath),
        ];
        return arduinoCommandArguments;
    },

    sendLogToClient: function(logContent) {
        process.send({log: logContent});
    },

    sendHexResultToClient: function(hexResult) {
        process.send({hex: hexResult});
    },

    sendErrorToClient: function(error) {
        process.send({failed: error});
    },

    getBuildPath: function(code, board) {
        var cachePath = path.join(__dirname, './cache');
        if(!fs.existsSync(cachePath)) {
            fs.mkdirSync(cachePath, 0755);
        }
        // because Arduino disallow filename starts with a number, so here adds an arbitrary 'a'
        var hash = 'a'+crypto.createHash('md5').update(code+board).digest('hex');
        return path.resolve(path.join(cachePath, hash));
    },

    // makeSketchPath: function() {
    //     var sketchPath = path.join(this.getTemporaryPath(), uuid.v1());
    //     fs.mkdirSync(sketchPath);
    //     return sketchPath;
    // },

    getInoFilePath: function(buildPath) {
        return path.join(buildPath, this.getPathLastPart(buildPath) + '.ino');
    },

    getHexFilePath: function(buildPath) {
        return path.join(buildPath, this.getPathLastPart(buildPath) + '.cpp.hex');
    },

    getLogFilePath: function(buildPath) {
        return path.join(buildPath, this.getPathLastPart(buildPath) + '.log');
    },

    getPathLastPart: function(fullPath) {
        pathParts = fullPath.split(path.sep);
        return pathParts[pathParts.length - 1];
    },

    getTemporaryPath: function() {
        var basePath = '/tmp';
        switch (process.platform) {
        case 'win32':
            basePath = 'c:\tmp';
            break;
        case 'darwin':
        case 'linux':
            basePath = '/tmp';
            break;
        }
        var fullPath = path.join(basePath, 'mblock');
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath);
        }
        return fullPath;
    },

    getArduinoExecutable: function() {
        switch (process.platform) {
        case 'win32':
            return path.join(__dirname, './tools/Arduino/arduino.exe');
            break
        case 'darwin':
            return path.join(__dirname, './tools/Arduino.app/Contents/MacOS/Arduino');
            break
        case 'linux':
            return path.join(__dirname, './tools/arduino/arduino');
        }
        return path.join(__dirname, './tools/arduino/arduino');
    },

    getUploadBoardParameter: function(board) {
        if(board.indexOf("_uno") >= 0){
            return "arduino:avr:uno";
        }else if(board.indexOf("_leonardo") >= 0){
            return "arduino:avr:leonardo";
        }else if(board.indexOf("_mega2560") >= 0){
            return "arduino:avr:mega:cpu=atmega2560";
        }else if(board.indexOf("_mega1280") >= 0){
            return "arduino:avr:mega:cpu=atmega1280";
        }else if(board.indexOf("_nano328") >= 0){
            return "arduino:avr:nano:cpu=atmega328";
        }else if(board.indexOf("_nano168") >= 0){
            return "arduino:avr:nano:cpu=atmega168";
        }
        return "arduino:avr:uno";
    }
}

process.on('message', function(msg) {
    if(msg.code){
        ArduinoIDE.compileCode(msg.code, msg.board,msg.extensionArr);
    }
});