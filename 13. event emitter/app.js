var Emitter = require("./emitter");
var eventConfig = require("./config");

var emitter = new Emitter();

emitter.on(eventConfig.events.BAD_SCORE, function() {
    console.log("Error !!!");    
})
emitter.on("bad", function() {
    console.log("Bug bug bug");    
})

var arrs = [10, 4, 6, 8, 10, 9, 2, 1, 4, 4, 6];

for (var inf of arrs) {
    if (inf < 3) 
        emitter.emit(eventConfig.events.BAD_SCORE);
}
