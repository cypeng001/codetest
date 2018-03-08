var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
	console.log('accept');
	socket.on('data', function (data) {
		console.log('data', data, data.toString());
		socket.write('from server:' + data.toString());
	});
	socket.on('end', function () {
		console.log('end');
		//socket.write('end');
	});
});

console.log('1');

server.listen(8124);

server.on('listening', function() {
	console.log('listen');
});

console.log('2');
