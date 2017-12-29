var fs = require('fs');

var content1;
var content2;

var callback = function(err, results) {
	console.log("callback", err, results);
};

console.log("1");

fs.readFile('async_test01_01.txt', 'utf-8', function (err, content1) {
	if (err) {
		return callback(err);
	}
	fs.readFile('async_test01_02.txt', 'utf-8', function (err, content2) {
		if (err) {
			return callback(err);
		}
		callback(null, [content1, content2]);
	})
});

console.log("2");