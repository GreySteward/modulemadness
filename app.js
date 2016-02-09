var http = require ('http');
//var hello = require('./account balance');
var module = require ('./module');

http.createServer(function(req,res) {
    res.writeHead(200);
    res.write(module.textreturn() + module.accountBalance(100,1000000));
//    res.write("hello world");
    res.end();
}).listen(3000);

console.log("listening on port 3000");