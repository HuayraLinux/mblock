/**
 * Created by lingqing.yang on 2017/5/15.
 */


const path = require('path');
const {ipcRenderer} = require('electron');
const shell = require('electron').shell;

const spawn = require('child_process').spawn;
const fstream = new fileStream();
var dialog = remote.dialog;
const {BrowserWindow} = require('electron').remote
//fstream.FileDirExists('web/flash-core/ext','web/flash-core/js',fstream.copyFile);

var _title;
ipcRenderer.on("getPath", function (event, arg) {
    console.log('fileDialog getPath::::', arg);
    if (arg && arg.lastIndexOf(".sb2") > -1) {
        global.doubleClickFilePath = arg;
    }
    else {
        global.doubleClickFilePath = null;
    }
    if (global.readyForFlash && global.doubleClickFilePath) {
        global.fDialog.openFileFromPath(global.doubleClickFilePath);
        global.doubleClickFilePath = null;
    }
});
ipcRenderer.send("init");
var string = remote.getGlobal('sharedObject').oslang;
string = string.replace('_', '-');
window.localStorage.setItem('oslang', string);

function FileDialog() {
    console.log("process@@@@@   ", process.argv)
    var self = this;
    this.openFile = function () {
        dialog.showOpenDialog({
                filters: [
                    {name: 'Scratch 2 Project', extensions: ['sb2']},
                    {name: 'Scratch 1.4 Project', extensions: ['sb']}
                ],
                properties: ['openFile']
            },
            function (filePaths) {
                console.log('filePaths:', filePaths);
                if (filePaths) {
                    self.openFileFromPath(filePaths[0]);
                }
            }
        );
    };

    //用于打开本地对话框，返回选中文件路径（重构用）
    this.openLocalFile=function (callback) {
        remote.dialog.showOpenDialog(
            BrowserWindow.getFocusedWindow(),
            {
                defaultPath: 'c:/',
                filters: [
                    {name: 'Scratch 2 Project', extensions: ['sb2']},
                    {name: 'Scratch 1.4 Project', extensions: ['sb']}
                ],
                properties: ['openFile']
            },
            function(filePaths){
                console.log('filePaths:',filePaths);
                return callback(null,filePaths);
            }
        );
    };

    //根据路径读取文件，返回arrayBuffer（重构用）
    this.openLocalFileByPath=function (path,callback) {
        fstream.openFileWithError(path,(err,data)=>{
            if(err){
                return callback(err);
            }
            return callback(null,data)
        })
    };

    this.unzipFromPath = function () {
        dialog.showOpenDialog({
            title: "Select the .zip file to decompress",
            filters: [
                {name: '.ZIP Files', extensions: ['zip']},
                {name: 'All Files', extensions: ['*']}
            ]
        }, (fileNames) => {
            // The rest of the code here
            var dist = 'ext/libraries';

            if (fileNames && fileNames.length > 0) {
                fstream.unzip(fileNames[0], dist);
            }
        });

    };

    this.openFileFromPath = function (filePath) {
        fstream.openFile(filePath, data => {
            data = new Buffer(data).toString('base64');
            __flashCore.importProject(data);

            var temp = filePath.replace(/\\/g, "/").split("/");
            _title = temp[temp.length - 1].split(".sb2")[0];
            global.installFilePath = filePath;
            __flashCore.setProjectTitle(_title);
        })
    };
    this.showSaveDialog = function(fileName,callback){
        remote.dialog.showSaveDialog(
        BrowserWindow.getFocusedWindow(),
        {
            title:'请选择文件位置',
            defaultPath:fileName,
            filters:[
                {name: '所有文件', extensions: ['*']}
            ],
            properties:['openFile']},function(filePath){
            if(filePath){
               /* var realFilePath = saveProject(filePath,project.data);
                callback(realFilePath);*/
               callback(null,filePath);
            }
            else{
                callback(null,null);
            }
        })
    }
    this.saveProject = function(filePath, data,callback) {
    	if (filePath.lastIndexOf('.sb2') != filePath.length - 4) {
	        filePath = filePath + ".sb2";
	    }
	    var temp = filePath.replace(/\\/g, "/").split("/");
	    _title = temp[temp.length - 1].split(".sb2")[0];
        fstream.saveFile(filePath, new Buffer(data, 'base64'),function(err){
            callback(err,_title);
            console.log("保存名：", _title);
        });
	    return filePath;
	};
    this.readdir = function (path) {
        return fstream.readdir(path);
    };

    this.readFile = function (path) {
        return fstream.readFile(path);
    };

    this.copyFile = function (filename, dist) {
        var src = 'flash-core/ext/libraries/' + filename + '/src';
        fstream.copyFile(src, dist);
    };

    this.downloadFileOnline = function (zip, zipPath, file) {
        var dist = 'web/flash-core/ext/libraries/';
        fstream.downloadFileOnline(zip, zipPath, file, dist);
    };
}

global.fDialog = new FileDialog();

global.openURL = function (url) {
    shell.openExternal(url);
};

global.openArduinoIDE = function (data) {
    var arduinoPath = '', distPath = '', currentPath = '';
    switch (process.platform) {
        case 'win32':
            arduinoPath = './tools/arduino-server/tools/Arduino/arduino.exe';
            var dirPath = __dirname;
            console.log('当前目录:::：', dirPath);
            if (dirPath.indexOf('node_modules') > -1) { // 未打包
                dirPath = path.resolve("./");
            } else { // 已打包
                dirPath = path.resolve('./resources');
            }
            distPath = path.resolve(dirPath, './web/tmp/tmp.ino');console.log('::distPath:::', distPath);
            currentPath = path.resolve(dirPath, arduinoPath);
            break
        case 'darwin':
            arduinoPath = './tools/arduino-server/tools/Arduino.app/Contents/MacOS/Arduino'
            if (__dirname.indexOf('node_modules') > -1) { // 未打包
                distPath = path.resolve('./', './web/tmp/tmp.ino');
                currentPath = path.resolve('./', arduinoPath);
            } else { // 已打包
                distPath = path.resolve(__dirname, '../../web/tmp/tmp.ino');
                currentPath = path.resolve(__dirname, '../../', arduinoPath);
            }
            break
        case 'linux':
            var dirPath = '';
            if (__dirname.indexOf('node_modules') > -1) { // 未打包
                dirPath = path.resolve('./');
            } else { // 已打包
                dirPath = path.resolve(__dirname, '../../');
            }
            arduinoPath = './tools/arduino-server/tools/arduino/arduino';
            distPath = path.resolve(dirPath, './web/tmp/tmp.ino');
            currentPath = path.resolve(dirPath, arduinoPath);
            break
    }
    fstream.saveFile(distPath, data);
    //需要适配空格
    if (currentPath.indexOf(" ") >= 0) {
        currentPath = '"' + currentPath + '"';
    }
    if (distPath.indexOf(" ") >= 0) {
        distPath = '"' + distPath + '"';
    }
    //fDialog.copyFile('Demo',distPath);
    const arduino = spawn(currentPath, [distPath], {shell: true});
    arduino.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    arduino.stderr.on('data', (data) => {
        console.log(data.toString());
    });

    arduino.on('exit', (code) => {
        console.log(`子进程退出码：${code}`);
    });
}
