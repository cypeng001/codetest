var crypto = require('crypto'); 
//Ω‚√‹ 
function decode(cryptkey, iv, secretdata) { 
    var  
    decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv), 
    decoded  = decipher.update(secretdata, 'base64', 'utf8'); 
     
    decoded += decipher.final( 'utf8' ); 
    return decoded; 
} 
//Ω‚√‹ 
function encode(cryptkey, iv, cleardata) { 
    var  
    encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv), 
    encoded  = encipher.update(cleardata, 'utf8', 'base64'); 

    encoded += encipher.final( 'base64' ); 
    return encoded; 
} 

var  
cryptkey   = crypto.createHash('sha256').update('__tazai_wolf__key').digest(), 
iv         = '1234567890000000', 
buf        = "Hello World", 
enc        = encode( cryptkey, iv, buf ); 

var dec        = decode(cryptkey, iv, enc); 

function b64enc(data) { 
    var b   = new Buffer(data, 'binary'); 
    return b.toString('base64'); 
} 
 
console.warn("Encoded length: ", enc); 
console.warn("Decoded all: " + dec); 