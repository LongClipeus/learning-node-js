/* ---------------------- inheritance using object ---------------------- */

var user = {
    userName : "",
    password : "",
    getUser : function() {
        return this.userName + ' - ' + this.password;
    }
}

var hung = Object.create(user);
hung.userName = "Hung1234";
hung.password = "hungdeptrai";

var huyen = Object.create(user);
huyen.userName = "HuyenXinh";
huyen.password = "ngotau";

console.log(hung.getUser());
console.log(huyen.getUser());
