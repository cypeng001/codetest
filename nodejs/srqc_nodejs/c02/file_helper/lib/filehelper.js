//FileHelper
var fs = require('fs');

function FileHelper(path) {
	this.path =  path;
};

FileHelper.prototype.load = function (cb) {
	console.log('FileHelper.prototype.load version_1.0.0', this.path);

	fs.readFile(this.path, function (err, data) {
		cb(err, data);
	});
};

exports.version = "1.0.0";

exports.createFileHelper = function (path) {
	return new FileHelper(path);
};