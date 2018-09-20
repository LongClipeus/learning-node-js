var psn = new Object();

psn.firstName = 'Hoang';
psn.lastName = 'Tran';
psn.showName = function () {
    console.log(this.firstName + ' ' + this.lastName);
};

psn.showName();