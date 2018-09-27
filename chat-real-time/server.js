var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.get('/', function(req, res, next) {
    res.sendfile(__dirname + "/public/index.html");
});

app.use(express.static('public'));

io.on('connection', function(client) {
    console.log('client connected ...');
    client.on('join', function(data) {          // bắt sự kiện kết nối từ client 
        console.log(data);        
    });
    client.on('message', function(data) {       // bắt sự kiện client gửi message tới server 
        client.emit('thread', data);            // trả lại message về cho client 
        client.broadcast.emit('thread', data);  // thông báo đến cho các clients khác về sự kiện có một message mới
    });
});
server.listen(8000);