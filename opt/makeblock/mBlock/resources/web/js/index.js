/**
 * Created by lingqing.yang on 2016/12/24.
 */
const path = require('path');
const fs = require('fs');
const wv = document.getElementById('webview');

wv.addEventListener('dom-ready', (event) => {
    // 通过判断根目录下是否存在.debug[./desktop-app/.debug]文件来打开控制台
    if (fs.existsSync(path.join(__dirname, '../.debug'))) { //打开调试台
        wv.openDevTools();
    }
});

wv.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    // wv.inspectElement(e.x, e.y); //界面邮件点击元素，调试台自动定位到该元素
});
