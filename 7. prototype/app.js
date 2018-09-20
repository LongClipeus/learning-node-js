function Persion () {};

Persion.prototype.firstName = 'Luan';
Persion.prototype.lastName = 'Tran Van';
Persion.prototype.showName = function () {
    console.log(this.firstName + ' ' + this.lastName);    
};

var pers_1 = new Persion();
console.log(pers_1.firstName);
pers_1.showName();
