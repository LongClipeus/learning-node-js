var express = require("express");
var app = express();

var port = 3000;

app.get("/", function (req, res) {
    res.send("<h1>Welcome to server use express</h1>");
})

app.get("/api", function (req, res) {
    res.json({
        firstName: "Tuan",
        lastName: "Anh"
    });
})

app.get("/user/:id", function (req, res) {
    res.send(`<h1>User: ${req.params.id}</h1>`)
});

app.listen(port, function () {
    console.log("Server is listening on port:", port);
});