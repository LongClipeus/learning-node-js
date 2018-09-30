function read_file(fileName, callBack) {
    return fs.readFile(fileName, function (err, contents) {
        if (err) {
            callBack(err);
        } else {
            setTimeout(function () {
                callBack(null, contents);
            }, 1000);
        }
    });
}

var fs = require('fs');

module.exports.read_file = read_file;