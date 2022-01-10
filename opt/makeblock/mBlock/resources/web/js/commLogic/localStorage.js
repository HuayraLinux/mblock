/**
 * 本地数据存储
 */
var storage=window.localStorage;

function LocalStorage(){
    this.getCookie = function(name,callback){
        if(!storage)
            return;

        if (storage.getItem(name)!=undefined)
        callback(JSON.parse(storage.getItem(name))) ;//将获取的值转成json对象
    }

    this.setCookie = function(name,data){
        if(!storage)
            return;

        var s = JSON.stringify(data); //将json对象转成字符串
        storage.setItem(name,s);           //设置name值
    }
}
module.exports = LocalStorage;