var express = require('express');
var app = express();
var host = '192.168.73.1'
app.get('/',function(req,res){
    res.send('hello world')
})
app.listen(3000,host,function(){
    console.log('port 3000');
})