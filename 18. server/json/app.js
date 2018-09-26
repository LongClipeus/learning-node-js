var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    var user = {
        userName: "hien-hoa",
        passwd: "123"
    }

    res.end(JSON.stringify(user));
}).listen(1337, "127.0.0.1");