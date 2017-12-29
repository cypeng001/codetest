//FileHelper
var fs = require('fs');

function FileHelper(path) {
	this.path =  path;
};

FileHelper.prototype.load = function (cb) {
	console.log('FileHelper.prototype.load', this.path);

	fs.readFile(this.path, function (err, data) {
		cb(err, data);
	});
};

exports.createFileHelper = function (path) {
	return new FileHelper(path);
};