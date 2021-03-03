'use strict';

const io = require('socket.io-client');
const hostURL = 'http://localhost:3000';
const driverURL = 'http://localhost:3000/driver';


const hostServer = io.connect(hostURL);


hostServer.on('message', (payload) => {
  console.log('Message received :', payload);
});

/* 
eventPool.on('intransit', intransit.pickedUp);

eventEmitter.on('intransit', async (payload) => {
  console.log('The order for ', payload.box.customerName, ' is on its way.');
  eventEmitter.emit('delivered', { orderID: payload.box.orderID });
});

function pickedUp(payload) {
  setTimeout(() => {
  console.log('Order#', payload.box.orderID, ' has been picked up');

  eventPool.emit('delivered', payload);
}, 1000);
}



eventPool.on('delivered', delivered.deliveryConfirmation);

eventEmitter.on('delivered', async (payload) => {
  console.log('Order ', payload.box.orderID, ' is delivered');
  console.log('Thank you for delivering order# ', payload.box.orderID, ' !!!');
});

function deliveryConfirmation(payload) {
  setTimeout(() => {
    console.log('Order#', payload.box.orderID, ' has been delivered! :-)');
  }, 3000);
}
 */