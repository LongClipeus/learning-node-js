var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/oop.txt", {
    encoding: "utf-8",
    highWaterMark:  1024 // 1 kB
});

var writeable = fs.createWriteStream(__dirname + "/test.txt");

// use the technique pipe 
readable.pipe(writeable);