var http = require('http');

console.log("hello world1");

var options = {
    hostname: '127.0.0.1',
    port: 80,
    path: '/mxxy/plat/auth.php',
    method: 'GET'
};

console.log("hello world2");

var req = http.request(options, function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
});

console.log("hello world3");

req.on('error', function(err){
    console.error('error', err);  
});

console.log("hello world4");
req.end();
console.log("hello world5");