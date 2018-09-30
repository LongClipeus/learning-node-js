function read_file(fileName) {
    return fs.readFileSync(fileName);
}

var fs = require('fs');

module.exports.read_file = read_file;