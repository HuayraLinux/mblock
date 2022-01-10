/**
 * Created by yanglingqing on 3/14/17.
 * 保存用户配置
 */


var storage=window.localStorage;

var Configuration = function () {

    this.get = function (name) {
        if(!storage){
            alert("浏览器不支持localstorage");
            return false;
        }else{
            //主逻辑业务
            var strStoreData = typeof(storage[name]) == 'undefined'? '': storage.getItem(name);
            return strStoreData;
        }
    }

    this.set = function (name, value) {
         storage? storage.setItem(name,value):alert("浏览器不支持localstorage");
    }
}
module.exports = Configuration;