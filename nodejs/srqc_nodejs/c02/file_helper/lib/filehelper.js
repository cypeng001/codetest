//FileHelper
var fs = require('fs');
var pathutil = require('./pathutil');

function FileHelper(path) {
	this.path = path;
};

FileHelper.prototype.load = function (cb) {
	console.log('FileHelper.prototype.load', this.path);

	var relative = pathutil.isRelative(this.path);
	if (relative) {
		console.log("path is relative");
	}
	else {
		console.log("path is absolute");
	}

	fs.readFile(this.path, function (err, data) {
		cb(err, data);
	});
};

exports.version = "1.0.0";

exports.createFileHelper = function (path) {
	return new FileHelper(path);
};