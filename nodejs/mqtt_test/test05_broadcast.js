var mqtt = require('mqtt');

console.log('server start');

mqtt.createServer(function(client) {

  console.log('client start');

  var self = this;

  if (!self.clients) self.clients = {};

  client.on('connect', function(packet) {
    console.log('connect');
    client.connack({returnCode: 0});
    client.id = packet.clientId;
    self.clients[client.id] = client;
  });

  client.on('publish', function(packet) {
    console.log('publish', packet.topic, packet.payload);
    for (var k in self.clients) {
      self.clients[k].publish({topic: packet.topic, payload: packet.payload});
    }
  });

  client.on('subscribe', function(packet) {
    console.log('publish');
    var granted = [];
    for (var i = 0; i < packet.subscriptions.length; i++) {
      granted.push(packet.subscriptions[i].qos);
    }

    client.suback({granted: granted, messageId: packet.messageId});
  });

  client.on('pingreq', function(packet) {
    console.log('pingreq');
    client.pingresp();
  });

  client.on('disconnect', function(packet) {
    console.log('disconnect');
    client.stream.end();
  });

  client.on('close', function(err) {
    console.log('close');
    delete self.clients[client.id];
  });

  client.on('error', function(err) {
    client.stream.end();
    console.log('error!');
  });
}).listen(1883);