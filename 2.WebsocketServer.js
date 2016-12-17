//WebSocket服务器  使用WebSocket，在后台完成实时通讯
var Server = require('ws').Server;
//创建一个WebSocketServer服务器的实例，并指定端口号
var server = new Server({port: 8080});
//监听端口号的链接，当客户端链接上路之后执行对应的回调函数
//这个socket是每个客户端所持有的,，每个客户端链接上来之后给他键一个scoket
server.on('connection', function (socket) {//socket:相当于通讯工具
    //监听客户端发过来的消息
    //在Node中只要能on都是EventEmitter的子类
    socket.on('message', function (message) {
        console.log(message);
        //服务器向这个客户端  发送消息
        socket.send('服务器说:' + message);//send是对emit的封装
        //socket.emit('message','服务器')
    })
});