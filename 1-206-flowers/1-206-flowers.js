'use strict';

const io = require('socket.io-client');
const hostURL = 'http://localhost:3000/caps';
const faker = require('faker');

const hostServer = io.connect(hostURL);





setInterval(() => {
  let box = {
    storeName: 'Wallingford',
    orderID: faker.random.number(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
    date: Date()
  };
  hostServer.emit('pickup', { event: 'pickup', box: box, time: Date.now });
}, 5000);

hostServer.on('intransit', (payload) => {
  hostServer.emit('received', payload);
});

hostServer.on('delivered', (payload) => {
  hostServer.emit('thankyou', payload);
  hostServer.emit('received', payload);
});
