var buffer = new ArrayBuffer(20);

var view = new Int32Array(buffer);      // The size of an element of the array is 32bit = 4byte
view[0] = 10;
view[1] = 99;
view[2] = 87;

console.log(view);
console.log(view.length);
