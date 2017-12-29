var fork = require('child_process').fork;
var cpus = require('os').cpus();

console.log("fork01_1");
console.log("cpus", cpus.length, cpus);

for (var i = 0; i < cpus.length; i++) {
	console.log("fork01_2_1", i);
	fork('./fork01_worker.js');
	console.log("fork01_2_2");
}

console.log("fork01_3");