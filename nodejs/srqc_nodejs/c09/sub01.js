console.log('sub01_1');

process.on('message', function (m) {
	console.log('CHILD got message:', m);
});

console.log('sub01_2');

process.send({foo: 'bar'});

console.log('sub01_3');