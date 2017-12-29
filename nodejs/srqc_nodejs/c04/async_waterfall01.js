var fs = require('fs');
var async = require('async');

console.log("1");

async.waterfall([
	function (callback) {
		console.log("waterfall1_1");
		fs.readFile('async_test01_01.txt', 'utf-8', function(err, data) {
			console.log("waterfall1_1_callback1", err, data);
			callback(err, data, "tmp_arg2");
			console.log("waterfall1_1_callback2");
		});
		console.log("waterfall1_2");
	},
	function (arg1, arg2, callback) {
		console.log("waterfall2_1", arg1, arg2);
		fs.readFile('async_test01_02.txt', 'utf-8', function(err, data) {
			console.log("waterfall2_1_callback1", err, data);
			callback(err, data);
			console.log("waterfall2_1_callback2");
		});
		console.log("waterfall2_2");
	}
], function (err, results) {
	console.log("callback", err, results);
});

console.log("2");