var fs = require("fs");

var content = fs.readFileSync(__dirname + "/ds.txt");

console.log(content);
console.log(content.toString());

