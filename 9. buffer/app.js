// convert string to buffer
var buffer = new Buffer("Xin chào tất cả các bạn", "utf-8");
console.log(buffer);

// convert buffer to string
console.log(buffer.toString());
// convert buffer to json
console.log(buffer.toJSON());
