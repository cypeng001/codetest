var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
	console.log('client connected');
	ws.on('message', function (message) {
		console.log(message);
	});
});
wss.on('error', function(err) {
	console.log('error', err);
});