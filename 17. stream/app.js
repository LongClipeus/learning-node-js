var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/foucault_pendulum.txt", {
    encoding: "utf-8",
    highWaterMark:  1024 // 1 kB
});

var writeable = fs.createWriteStream(__dirname + "/test.txt");

var size = 0;
readable.on("data", function (chunk) {
    console.log(chunk.length);
    writeable.write(chunk);
    size += chunk.length;
    console.log(`size = ${size}`);
})
