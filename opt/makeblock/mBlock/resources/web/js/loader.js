
function interruptThread(msg) {
    __flashCore.interruptThread(msg);
}

window.onload = function () {
    var loader = document.getElementById('loader-wrapper'),
        body = document.getElementById('body');
    if(loader && loader.parentNode){
        loader.parentNode.removeChild(loader);
    }
    if (body) {
        body.className = '';
    }
    console.log('######close loader-wrapper')

}



var mblockSWF = document.getElementById("mblock");
var percent =0;
var initialTimeout = setInterval(function () {
    //Ensure Flash Player's PercentLoaded method is available and returns a value
    if (typeof mblockSWF.PercentLoaded !== 'undefined') {
        clearInterval(initialTimeout);
        //Set up a timer to periodically check value of PercentLoaded
        var loadCheckInterval = setInterval(function () {
            //Once value == 100 (fully loaded) we can do whatever we want
           // var percent = mblockSWF.PercentLoaded();
            if(percent<60){
                percent =percent+3;
            }else {
                percent = mblockSWF.PercentLoaded();
            }
            var $loader = $('#loadingFlash');
            // var $progress
            $loader.find('.progress').css('width', percent + '%');

            if (percent === 100) {
                //Execute function
                setTimeout(function () {
                    $loader.remove();
                }, 200);
                //Clear timer
                clearInterval(loadCheckInterval);
            }
        }, 100);
    } else {
        console.log('no flash');
        //$('.not-flash').removeClass('hidden');
        //$('#loadingFlash').remove();
        //clearInterval(initialTimeout);
    }
}, 200);
