var fs = require('fs');

console.log("1");

fs.readFile('file_test01.txt', function (err, data) {
	if (err) {
		return console.error("readFile ERR", err);
	}
	console.log("readFile", data.toString());
});

console.log("2");