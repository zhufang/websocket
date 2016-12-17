var express=require('express');
var app=express();
var start=Date.now();//当前时间
app.get('/clock',function (req,res) {
    //* 不太安全 也可以使用客户端的localhost
    // res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
    /*
     Allow-Origin   跨域请求的路径
    * Allow-Methods 跨域请求的方法  'GET' 'POST' 'DELETE'
    * Allow-Headers 跨域请求的请求头*/
/*    var now=Date.now();
    console.log(now-start);
    start=now;*/
    res.send(new Date().toLocaleString());
});
app.listen(8080,function () {
   console.log('ok')
});