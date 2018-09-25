var time = 0;

var timer = setInterval(function() {
    ++time;
    console.log(time + ' seconds hava passed');    
    if (time > 4) {
        clearInterval(timer);
    }
}, 1000);