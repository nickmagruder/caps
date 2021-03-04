'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const storeName = 'Acme-Widgets'
const socket = io.connect('http://localhost:3000/caps');

socket.emit('getVendorMessages');



setInterval(() => {
  (console.log('acme emit'));
  socket.emit('pickup', {
    storeName: storeName,
    orderID: faker.random.number(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress(),
    date: Date()
  });
}, 5000);

socket.on('intransit', (payload) => {
  socket.emit('received', payload);
});

socket.on('delivered', (payload) => {
  socket.emit('thankyou', payload);
  socket.emit('received', payload);
});
