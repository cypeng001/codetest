var mqtt = require('mqtt')
  , client = mqtt.createClient();

client.publish('messages', 'mqtt');
client.publish('messages', 'is pretty cool');
client.publish('messages', 'remember that!', {retain: true});
client.end();