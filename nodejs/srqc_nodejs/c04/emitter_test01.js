var events = require('events');

var emitter = new events.EventEmitter();

emitter.on("event1", function (message) {
		console.log("event1", message);
});

emitter.on("event2", function (message) {
		console.log("event2", message);
});

emitter.once("event3", function (message) {
		console.log("event3", message);
});

emitter.on("event4", function (message) {
		console.log("event4_1", message);
});

emitter.on("event4", function (message) {
		console.log("event4_2", message);
});

emitter.on("event5", function (message1, message2) {
		console.log("event5", message1, message2);
});

console.log("1");

emitter.emit("event1", "Hello World");
emitter.emit("event2", "Hello World");
emitter.emit("event3", "Hello World");
emitter.emit("event1", "Hello Cyp");
emitter.emit("event2", "Hello Cyp");
emitter.emit("event3", "Hello Cyp");
emitter.emit("event4", "Hello Cyp");
emitter.emit("event5", "Hello World", "Hello Cyp");

console.log("2");