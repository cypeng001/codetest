var net = require('net');

var client = net.connect({port: 8124}, function () {
	console.log('client connect');
	client.write('world!');
});

client.on('data', function (data) {
	console.log('data', data, data.toString());
	client.end();
});

client.on('end', function() {
	console.log('end');
});