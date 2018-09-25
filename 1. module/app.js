var test = require('./bar.js');
test();

var stuff = require('./stuff');

console.log(stuff.counter(['Nhuy', 'Hoa', 'Mai', 'Phuong', 'Hong']));
console.log(`pi = ${stuff.pi}`);
console.log(stuff.sum(1, 1.5));

