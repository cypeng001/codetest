var mqtt = require('mqtt')
  , client = mqtt.createClient();

client.subscribe('messages');
client.publish('messages', 'hello me!');
client.on('message', function(topic, message) {
  console.log(message);
});
client.options.reconnectPeriod = 0;  // disable automatic reconnect