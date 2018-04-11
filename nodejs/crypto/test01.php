<?php
function decode($cryptkey, $iv, $secretdata){
	return openssl_decrypt($secretdata,'aes-256-cbc',$cryptkey,false,$iv);
}
function encode($cryptkey, $iv, $secretdata){
	return openssl_encrypt($secretdata,'aes-256-cbc',$cryptkey,false,$iv);
}

$cryptkey = hash('sha256','__tazai_wolf__key',true);
$iv = '1234567890000000';
$buf = "Hello World";

$enc = encode($cryptkey,$iv,$buf);
$dec = decode($cryptkey, $iv, $enc);

echo "Encoded length: ",$enc,"\n";
echo "Decoded all: ",$dec,"\n";