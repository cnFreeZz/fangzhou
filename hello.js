var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var buf = new Buffer('message');

var server = http.createServer(function(req,res){
    if(req.url=='/dopost'&& req.method.toLowerCase() == 'post'){
        var alldata ='';
        req.on('data',function(chunk){
            alldata+=chunk;
        })
        req.on('end', function () {
            var datastring = alldata.toString()//得到的是一个字符串 需要解析
            var obj= querystring.parse(datastring);//定义一个对象来存放解析后的值
            console.log(obj.name,obj.age);
            console.log(obj.age);
            console.log(obj.sex);
            console.log(obj.checkbox[0]);
            console.log(obj.file);//获取的只是文件名，文件是没有被上传的，建议使用nodejs的formodable模块实现文件的上传。
            res.end('请求成功')
        })
    }
})

fs.open('./mes.txt')
server.listen(9999,'127.0.0.1');//设置监听端口和监听地址
