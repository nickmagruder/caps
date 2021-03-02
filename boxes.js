'use strict';

const Events = require('events');

const eventEmitter = new Events();


// when ready for pickup: notify drivers
eventEmitter.on('pickup', async (payload) => {
    console.log('Package Ready for Pickup!', payload);
    eventEmitter.emit('intransit', { orderID: payload.box.orderID });
  });
  

  // when pickedup and intransit: notify store owners
  eventEmitter.on('intransit', async (payload) => {
    console.log('User', payload.user, 'has received their message');
    eventEmitter.emit('delivered', { orderID: payload.box.orderID });
  });
  

// when delivered: notify store owners
  eventEmitter.on('delivered', async (payload) => {
    console.log('Order ', payload.box.orderID, ' is delivered');
  });

  eventEmitter.emit('send', { message: 'hello word' });