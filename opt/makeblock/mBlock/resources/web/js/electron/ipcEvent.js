var events = require('events');

const mainEvent = new events.EventEmitter();
const rendererEvent = new events.EventEmitter();


function _ipcRenderer(){
    //单例模式
    if (this.constructor.instance){
        return this.constructor.instance;
    }else{
        this.constructor.instance = this;
        this.sender = ipcMain;
    }
}
_ipcRenderer.prototype.on = function (name,func) {
    rendererEvent.on(name,func);
};
_ipcRenderer.prototype.send = function (name,obj) {
    mainEvent.emit(name, this, obj);
};


function _ipcMain() {
    //单例模式
    if (this.constructor.instance){
        return this.constructor.instance;
    }else{
        this.constructor.instance = this;
    }
}
_ipcMain.prototype.on = function (name,func) {
    mainEvent.on(name,func);
};
_ipcMain.prototype.send = function (name,obj) {
    rendererEvent.emit(name, this, obj);
};

var ipcMain = new _ipcMain();
var ipcRenderer = new _ipcRenderer();


module.exports = {ipcMain,ipcRenderer};
