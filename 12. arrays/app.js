var arr = [];

arr.push(function() {
    console.log("Hello");    
});

arr.push(function() {
    console.log("Xin chào các bạn");    
});

arr.push(function() {
    console.log("hi");    
});

arr[0]();
arr[1]();
arr[2]();

console.log("\n");

arr.forEach(function (item) {
    item();
});
