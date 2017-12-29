//FileHelper
function FileHelper(path) {
	this.path =  path;
};

FileHelper.prototype.getPath = function () {
	return this.path;
};

FileHelper.prototype.setPath = function (path) {
	this.path = path;
};

FileHelper.prototype.load = function (cb) {
	console.log('FileHelper.prototype.load', this.path);
};

exports.createFileHelper = function (path) {
	return new FileHelper(path);
};