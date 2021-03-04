'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

socket.emit('getVendorMessages');



socket.on('message', (payload) => {
  console.log('Message received :', payload);
});


socket.on('pickup', (payload) => {
  setTimeout(() => {
    console.log('Order#', payload.orderID, ' has been picked up');
    payload.event = 'intransit';
    socket.emit('intransit', payload);
    socket.emit('received', payload);
}, 1000);

setTimeout(() => {
  console.log('Order#', payload.orderID, ' has been delivered! :-)'); 
  payload.event = 'delivered';
  socket.emit('delivered', payload);
  socket.emit('received', payload);
}, 3000);

});
