'use strict';

const Events = require('events');

const eventEmitter = new Events();


// when ready for pickup: notify drivers
eventEmitter.on('pickup', async (payload) => {
    console.log('Package-Ready Sent to Driver', payload);
    eventEmitter.emit('intransit', { test: test });
  });
  

  // when pickedup and intransit: notify store owners
  eventEmitter.on('intransit', async (payload) => {
    console.log('The order for ', payload.box.customerName, ' is on its way.');
    eventEmitter.emit('delivered', { orderID: payload.box.orderID });
  });
  

// when delivered: notify store owners
  eventEmitter.on('delivered', async (payload) => {
    console.log('Order ', payload.box.orderID, ' is delivered');
    console.log('Thank you for delivering order# ', payload.box.orderID, ' !!!');
  });

