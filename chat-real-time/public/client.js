var socket = io.connect('http://localhost:8000');

socket.on('connect', function (data) {
    socket.emit('join', 'Hello server form client');
});

// listen thread even 
socket.on('thread', function(data) {
    $('#thread').append('<li>' + data + '</li>')
});

// listen form message
$('form').submit(function() {
    var message = $('#message').val();  // get message of form
    console.log(message);    
    socket.emit('message', message);    // send message to server
    this.reset();                       // clearn form
    return false;
});