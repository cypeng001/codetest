var fs = require('fs');
var async = require('async');

console.log("1");

async.parallel([
	function (callback) {
		console.log("parallel1_1");
		fs.readFile('async_test01_01.txt', 'utf-8', callback);
		console.log("parallel1_2");
	},
	function (callback) {
		console.log("parallel2_1");
		fs.readFile('async_test01_02.txt', 'utf-8', callback);
		console.log("parallel2_2");
	}
], function (err, results) {
	console.log("callback", err, results);
});

console.log("2");