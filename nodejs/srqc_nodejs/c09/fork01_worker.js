var http = require('http');

console.log("fork01_worker_1");

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
});

var port = Math.round((1 + Math.random()) * 1000);
var host = '127.0.0.1';

console.log("fork01_worker_2", port, host);

server.listen(port, host);

console.log("fork01_worker_3");