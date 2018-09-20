/* -------------------- By value --------------------*/
function changeByValue (b) {
    b = 2;
}

var a = 1;
console.log(a);
changeByValue(a);
console.log(a);
console.log('\n');

/* -------------------- By reference --------------------*/
function changeByReference (c) {
    c.fn = function () {};
    c.newProp = {};
    c.value = 20;
}

var c = {};
c.prop = {};
console.log(c);
changeByReference(c);
console.log(c);