'use strict'

class Persion {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello () {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);        
    }
}

var hoa = new Persion('Hoa', 'Nguyen Thi');
hoa.sayHello();

var huyen = new Persion('Huyen', 'Tran Thi');
huyen.sayHello();