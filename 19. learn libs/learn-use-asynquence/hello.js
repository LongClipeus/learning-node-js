function readFile(fileName) {
    var sq = ASQ();

    fs.readFile(fileName, sq.errfcb());

    return sq;
}

function delayMsg(done, contents) {
    setTimeout(function () {
        done(contents);
    }, 1000);
}

function say(fileName) {
    return readFile(fileName)
        .then(delayMsg);
}

var fs = require('fs');
var ASQ = require('asynquence');
require('asynquence-contrib');

module.exports.say = say;