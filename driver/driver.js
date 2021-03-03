'use strict';

const io = require('socket.io-client');
const hostURL = 'http://localhost:3000/caps';
/* const driverURL = 'http://localhost:3000/driver'; */


const hostServer = io.connect(hostURL);


hostServer.on('message', (payload) => {
  console.log('Message received :', payload);
});


hostServer.on('pickup', (payload) => {
  setTimeout(() => {
    console.log('Order#', payload.box.orderID, ' has been picked up');
    payload.event = 'intransit';
    hostServer.emit('intransit', payload);
}, 1000);
setTimeout(() => {
  console.log('Order#', payload.box.orderID, ' has been delivered! :-)');
  payload.event = 'delivered';
  hostServer.emit('delivered', payload);
}, 3000);
});
