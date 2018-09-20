function persion (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function () {
        console.log('hello, my name is ' + this.firstName + ' ' + this.lastName);        
    };
}

var pers_1 = new persion('Hoang', 'Duc Van');
var pers_2 = new persion('Duc', 'Tran Van');

pers_1.showName();
pers_2.showName();
