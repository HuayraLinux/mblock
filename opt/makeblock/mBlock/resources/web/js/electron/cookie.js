
/**
 * 获取一个cookie
 * 值是经过unescape()解码出来的
 * @param string name cookie的名称
 * @return string 如果找到返回对应的值，反之返回空字符串
 */
function getCookie(name) {
	// abc=aaa; is_first=N
	var cookies = document.cookie;
	var cookiesLength = cookies.length;
    if (cookiesLength > 0) {　　//先查询cookie是否为空，为空就返回空字符串
        var start = cookies.indexOf(name + '='); // 通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1
        if (start != -1) {
            start = start + name.length + 1; // 最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
            var end = cookies.indexOf(';', start);// 第二个参数表示指定的开始索引的位置...这句是为了得到值的结束位置。因为需要考虑是否是最后一项，所以通过";"号是否存在来判断
            if (end == -1) {
                end = cookiesLength;
            }
            return unescape(cookies.substring(start, end)); // 通过substring()得到了值。通过unescape()反编码经过escape()编码过的字符串
        }
    }
    return '';
}

/**
 * 设置一个cookie
 * 值是经过escape()编码过的（因为有时是需要存中文的）
 * @param string name cookie的名称
 * @param string value cookie的值
 * @param string domain 设置cookie的主域
 * @param integer expires cookie过期时间；单位为秒，设为-1马上过期失效
 * @param string path 设置cookie的保存路径(不同的路径为不同的cookies,一般不建议设置这个)； 默认是当前页面的目录，如：/cookieSession/
 * @return void
 */
function setCookie(name, value, domain, expires, path) {
    var cookie = name + '=' + escape(value); // escape() 转码后为%uxxxx
    if (expires && (typeof expires == 'number')) {
    	var dateObject = new Date(); // 时间（日期）对象
    	if (expires == -1) { // 马上失效，马上过期，使一个cookie不可用
            dateObject.setDate(dateObject.getDate()-1); // dateObject.getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
            // exdate.setHours(exdate.getHours() + expiredays); 获取当前的小时数，并设置当前的小时数
        } else {
            dateObject.setSeconds(dateObject.getSeconds()+expires);
        }
    	var expiresTime = dateObject.toUTCString(); // .toUTCString()和.toGMTString() 返回值是一样的，建议使用前者；如：Wed, 05 Aug 2015 10:37:22 GMT
        cookie = cookie + ';expires=' + expiresTime;
    }
    if (domain && (typeof domain == 'string')) {
        cookie = cookie + ';domain=' + domain;
    }
    if (path && (typeof path == 'string')) {
        cookie = cookie + ';path=' + path;
    }

    document.cookie = cookie; // 默认cookies是随着浏览器的关闭，而取消的
}


var session = {
    defaultSession : {
        cookies : {
            get : function (cookie, callback) {
                var cookies = [{}];
                cookies[0].name = cookie.name;
                cookies[0].value = getCookie(cookie.name); 
                setTimeout(function () {callback(null, cookies)}, 0);
            },

            set : function (cookie, callback) {
                console.log('at cookie:::: ', cookie);
                setTimeout(function () {setCookie(cookie.name, cookie.value, null, cookie.expirationDate)},0);
                //console.log('at cookie get :::', getCookie(cookie.name)); 
            }


        }
    },
};

module.exports=session;