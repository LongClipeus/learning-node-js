/* ------------------ util ------------------ */
var util = require("util");
var name = "Mai";
var message = util.format("Hello, xin chao %s", name);

util.log(message);

/* ------------------ url ------------------ */
var url = require("url");
var urlInfo = url.parse("https://alison.com/courses");

console.log(urlInfo);
