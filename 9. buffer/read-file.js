var fs = require("fs");

// read file sync 
var content = fs.readFileSync(__dirname + "/ds.txt");
console.log(content);
console.log('call sync');

// read file async 
fs.readFile(__dirname + "/ds.txt", "utf8", function (err, data) {  
    console.log('call async');      
    var buffer = new Buffer(data);
    console.log(buffer);
});
console.log("Done");

