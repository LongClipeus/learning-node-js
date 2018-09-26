var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

var port = 3000;

// use middleware
app.use("/assets", express.static(__dirname + "/public"));
app.use(cookieParser());

// custom middleware
app.use("/", function(req, res, next) {
    console.log(`Request URL: ${req.url}`);
    req.requestTime = new Date();
    next();
});

app.get("/", function (req, res) {
    console.log("Cookies:", req.cookies);
    
    res.send(`
        <link href="/assets/style.css" rel="stylesheet" type="text/css">
        <h1>Welcome to server use express</h1>
        <p>Request time: ${req.requestTime}</p>
    `);
})

app.get("/api", function (req, res) {
    res.json({
        firstName: "Tuan",
        lastName: "Anh"
    });
})

app.get("/user/:id", function(req, res) {
    res.cookie("username", req.params.id);
    res.send(`<h1>User: ${req.params.id}</h1>`);
});

app.listen(port, function () {
    console.log("Server is listening on port:", port);
});