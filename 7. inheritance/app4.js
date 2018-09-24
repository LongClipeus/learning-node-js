'use strict'

var EventEmitter = require("events");
var eventConfig = require("./config");

class Dialog extends EventEmitter {
    constructor() {
        super();
        this.message = "hello";
    }

    sayHello(name) {
        console.log(`${this.message}: ${name}`);
        this.emit(eventConfig.events.HELLO, name);
    }
}

var dialog = new Dialog();
dialog.on(eventConfig.events.HELLO, function(name) {
    console.log("call dialog.on() function - param: ", name);    
});
dialog.sayHello("Nguyen Minh Bach");