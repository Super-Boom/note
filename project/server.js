var express = require('express');
var os = require('os');
var app = express();
var path = require('path');
// var host = '192.168.73.1'

function getIp() {
    var ipStr,
        infaces = os.networkInterfaces(),
        bool = false;
    for (var i in infaces) {
        infaces[i].some(function (x) {
            if ((x.family == 'IPv4') && (x.internal == false)) {
                ipStr = x.address;
                bool = true;
                return true
            }
        })
        if (bool) { break }
    }
    return ipStr
}
var ip = getIp();
var host = ip;

app.listen(3000, host, function () {
    console.log(`web i running on ${host}:3000`);
})

app.set('views',path.resolve(__dirname,'pages'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine( '.html', require( 'ejs' ).__express );
app.get('/', function (req, res) {
    res.render('index')
})
app.get('/scroll',(req,res)=>{
    res.render('mobilescroll');
})