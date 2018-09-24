var eventConfig = require("./config");
var eventEmetter = require("events");
var util = require("util");

function Dialog() {
    this.message = "Hello";
}

util.inherits(Dialog, eventEmetter);
Dialog.prototype.sayHello = function (name) {
    console.log(this.message + " : " + name);
    this.emit(eventConfig.events.HELLO, name);    
}

var dialog = new Dialog();
dialog.on(eventConfig.events.HELLO, function (name) {
    console.log("chao ban", name);
});

dialog.sayHello("Hoang Hoa Tham");