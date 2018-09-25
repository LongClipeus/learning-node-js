var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/oop.txt", {
    encoding: "utf-8",
    highWaterMark:  1024 // 1 kB
});

var compress = fs.createWriteStream(__dirname + "/test.gz");

var gzip = zlib.createGzip()
// compress file 
readable.pipe(gzip).pipe(compress);