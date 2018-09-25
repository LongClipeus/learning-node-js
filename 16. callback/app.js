function readDb(callback) {
    var user = {
        name : "hoa",
        passwd : "123"
    }
    callback(user);
}

// query data
readDb(function (data) {
    console.log('read callback 1');
    console.log("user: ", data);    
});

readDb(function (data) {
    console.log('read callback 2');
    console.log(`user: ${data.name} - ${data.passwd}`);   
});