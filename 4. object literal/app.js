var persion = {
    firstName : "Thang",
    lastName : "Nguyen",
    address : "No. 3, Hoang Hoa Tham Street",
    sayHello: function () {
        console.log('hello, my name is ' + this.firstName + " " + this.lastName);
        
    },
    sayHowAreYou : function () {
        console.log('how are you?');
        
    }
}

persion.sayHello();

console.log('hi, how are you? My name is ' + persion.firstName + " " + persion.lastName);
console.log('hi, how are you? My name is ' + persion["firstName"] + ' ' + persion["lastName"] + '\n\n');

for (var key in persion) {
    console.log(persion[key]);    
}
