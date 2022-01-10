var io = require('socket.io-client');
var socket = io.connect('http://127.0.0.1:56738');

socket.on('hidMessage', function(msg){
	console.log(msg);
})

// socket.emit('hidList', function(data){
// 	console.log(data);
// });

// socket.emit('hidConnect', function(msg){
//     console.log(msg);
// });


// socket.emit('hidSend', {'data':[255, 85, 9, 0, 2, 8, 7, 2, 0, 20, 0, 0]})
// setTimeout(function(
// 	socket.emit('hidSend', {data:[255, 85, 9, 0, 2, 8, 0, 2, 2, 0, 20, 0]});
// },3000);

setInterval(function(){
	setTimeout(function(){
        socket.emit('hidConnect', function(){
	    console.log('连接2.4G成功');
    });
	}, 2000);
	
    for(var i=0;i<5;i++){
    	
    }

    setTimeout(function(){
    	socket.emit('hidSend', {'data':[255, 85, 9, 0, 2, 8, 7, 2, 0, 20, 0, 0]});
    }, 10000);

    socket.emit('hidClose', function(data){
    	console.log('关闭2.4G成功');
    })
},5000);

