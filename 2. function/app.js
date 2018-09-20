function sayHello () {
    console.log('hello hello hello\n');
}

sayHello();

// first-class function
function logSaying (fn) {
    console.log('call fn() function');
    fn();
}

logSaying(sayHello);

// function expression
var sayGoodbye = function () {
    console.log('Goodbye hehe!\n');
}

sayGoodbye();

logSaying(function () {
    console.log('hello, how are you? This is expression');
})