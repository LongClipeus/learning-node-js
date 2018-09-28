var a = 1;
var b = 2;

console.log('Hello world');

console.log(a + b);

/* --------- Doc tham so truyen vao tu console ---------------- */
var name = process.argv[2];
console.log('Hello ' + name);		// lay ten tu

// in ket qua len man hinh console
process.stdout.write(`Welcome to nodejs, ${name}\n`);

// Doc cac tham so da truyen
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});