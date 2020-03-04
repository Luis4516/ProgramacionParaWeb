//npm init -y
//npm i http
//npm init -y
//npm i fs

/*
var http = require('http');
http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'text/plain' }); //Headers
    res.end("Hello world\n");
}).listen(1337, '127.0.0.1');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.htm');
    res.end(html);
}).listen(1337, '127.0.0.1');
