var cp = require('child_process');
var n = cp.fork(__dirname + '/sub01.js');

console.log('parent01_1');

n.on('message', function (m) {
	console.log('PARENT got message:', m);
});

console.log('parent01_2');

n.send({hello: 'world'});

console.log('parent01_3');