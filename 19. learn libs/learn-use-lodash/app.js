var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url === "/" || req.url === "/index.html") {
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/api") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var user = {
            userName: "hien-hoa",
            passwd: "123"
        }
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        var html = fs.readFileSync(__dirname + "/not-found.html", "utf8");
        res.end(html);
    }
}).listen(1337, "127.0.0.1", function () {
    console.log("Server listening on: http://localhost:1337");
});