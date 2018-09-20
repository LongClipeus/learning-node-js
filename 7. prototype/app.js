function Persion () {};

Persion.prototype.firstName = 'Luan';
Persion.prototype.lastName = 'Tran Van';
Persion.prototype.showName = function () {
    console.log(this.firstName + ' ' + this.lastName + '\n');    
};

var pers_1 = new Persion();
console.log(pers_1.firstName);
pers_1.showName();


/* ---------------------- inheritance ---------------------- */
function User (name, password) {
    this.name = name;
    this.password = password;
}

User.prototype.getName = function () {
    return this.name;
}
User.prototype.getPassword = function () {
    return this.password;
}
User.prototype.getLevel = function () {
    return this.level;
}
User.prototype.level = "admin";

function UserX (name) {
    this.name = name;
}

// UserX inheritance User
UserX.prototype = new User();

let user = new User('tuan', '123');
let user_x = new UserX('tu', '12345');

console.log('user.getName = ' + user.getName());
console.log('user.getPassword = ' + user.getPassword());
console.log('user.getLevel = ' + user.getLevel() + '\n');

console.log('user_x.getName = ' + user_x.getName());
console.log('user_x.getPassword = ' + user_x.getPassword());
console.log('user_x.getLevel = ' + user_x.getLevel() + '\n');

/* ---------------------- inheritance date ---------------------- */
Date.prototype.vnFomat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDay();
    return dd + '-' + mm + '-' + yyyy;
}

var now = new Date();

console.log('The present time: ' + now.vnFomat());
