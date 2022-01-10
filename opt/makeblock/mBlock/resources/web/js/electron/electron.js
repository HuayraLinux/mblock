
var session = require('./cookie');
const {ipcMain,ipcRenderer} = require('./ipcEvent');

// ************
// Menu
var Menu = function(){};
Menu.setApplicationMenu = () => null;
Menu.getApplicationMenu = () => null;
Menu.sendActionToFirstResponder = () => null;
Menu.buildFromTemplate = () => null;
Menu.popup = () => null;
Menu.closePopup = () => null;
Menu.append = () => null;
Menu.insert = () => null;
Menu.items = [];

// ************
// MenuItem
var MenuItem =function(){};
MenuItem.enabled = false;
MenuItem.visible = false;
MenuItem.checked = false;
MenuItem.label = [];
MenuItem.click = [];

// ************
// dialog
var dialog =function(){};
dialog.showOpenDialog = () => null;
dialog.showSaveDialog = () => null;
dialog.showMessageBox = () => null;
dialog.showErrorBox = () => null;

// ************
// BrowserWindow
var BrowserWindow = function(){};
BrowserWindow.getAllWindows = () => null;
BrowserWindow.getFocusedWindow= () => null;
BrowserWindow.fromWebContents= () => null;
BrowserWindow.addDevToolsExtension= () => null;
BrowserWindow.removeDevToolsExtension= () => null;
BrowserWindow.getDevToolsExtensions= () => null;
BrowserWindow.webContents= [];
BrowserWindow.id= [];
BrowserWindow.destroy= () => null;
BrowserWindow.close= () => null;
BrowserWindow.focus= () => null;
BrowserWindow.isFocused= () => null;
BrowserWindow.isDestroyed= () => null;
BrowserWindow.showInactive= () => null;
BrowserWindow.hide= () => null;
BrowserWindow.isVisible= () => null;
BrowserWindow.isModal= () => null;
BrowserWindow.maximize= () => null;
BrowserWindow.unmaximize= () => null;
BrowserWindow.loadURL= () => null;
BrowserWindow.on= () => null;

// ************
// app
var app = function(){};
app.on = () => null;
app.getName = () => null;
app.commandLine = { 
    appendSwitch: ()=> null,
    appendArgument : () => null,
    };

app.getTranslator = () => null;
app.quit = () => null;
app.exit = () => null;
app.relanuch = () => null;
app.isReady = () => null;
app.focus = () => null;
app.hide = () => null;
app.show = () => null;
app.getAppPath = () => null;
app.getPath = () => null;
app.setPath = () => null;
app.getFileIcon = () => null;
app.getVersion = () => null;
app.getName = () => null;
app.setName = () => null;
app.getLocale = function () {
    return 'zh-CN';
};
app.addRecentDocument = () => null;
app.clearRecentDocuments = () => null;
app.setAsDefaultProtocolClient = () => null;
app.removeAsDefaultProtocolClient = () => null;
app.isDefaultProtocolClient = () => null;
app.setUserTasks = () => null;
app.getJumpListSettings = () => null;
app.setJumpList = () => null;
app.makeSingleInstance = () => null;
app.releaseSingleInstance = () => null;
app.setUserActivity = () => null;
app.getCurrentActivityType = () => null;
app.setAppUserModelId = () => null;
app.importCertificate = () => null;
app.disableHardwareAcceleration = () => null;
app.setBadgeCount = () => null;
app.getBadgeCount = () => null;
app.isUnityRunning = () => null;
app.getLoginItemSettings = () => null;
app.setLoginItemSettings = () => null;
app.isAccessibilitySupportEnabled = () => null;
app.setAboutPanelOptions = () => null;
app.dock = {
    bounce: () => null,
    cancelBounce: () => null,
    downloadFinished: () => null,
    setBadge: () => null,
    getBadge: () => null,
    hide: () => null,
    show: () => null,
    isVisible: () => null,
    setMenu: () => null,
    setIcon: () => null,
}




module.exports = {ipcMain,ipcRenderer,BrowserWindow,app,Menu,MenuItem,session};



