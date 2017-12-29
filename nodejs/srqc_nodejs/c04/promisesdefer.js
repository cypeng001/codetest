var util = require('util');
var events = require('events');

var Promise = function() {
	events.EventEmitter.call(this);
};
util.inherits(Promise, events.EventEmitter);

Promise.prototype.then = function (success, error, progress) {
	if (typeof success == 'function') {
		this.once('success', success);
	}
	if (typeof error == 'function') {
		this.once('error', error);
	}
	if (typeof progress == 'function') {
		this.once('progress', progress);
	}
	return this;
};

var Deferred = function () {
	this.state = 'unfulfilled';
	this.promise = new Promise();
};

Deferred.prototype.resolve = function (obj) {
	this.state = 'fulfilled';
	this.promise.emit('success', obj);
};

Deferred.prototype.reject = function (err) {
	this.state = 'failed';
	this.promise.emit('error', obj);
};

Deferred.prototype.progress = function (data) {
	this.promise.emit('progress', data);
};