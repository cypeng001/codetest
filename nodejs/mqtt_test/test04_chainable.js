var mqtt = require('mqtt')
  , client = mqtt.createClient();

client
  .subscribe('messages')
  .publish('presence', 'bin hier')
  .on('message', function(topic, message) {
    console.log(topic, message);
  });