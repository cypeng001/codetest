var filehelpermod = require('./filehelpermod');

function fh1_load_cb(err, data) {
	console.log("fh1_load_cb", err, data, data.toString());
};
var fh1 = filehelpermod.createFileHelper('./fh1.txt');
fh1.load(fh1_load_cb);