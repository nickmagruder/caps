'use strict';


const eventPool = require('./events.js');

function newBox(payload) {

  console.log('Package Ready for Pickup!',
    `Store: ${payload.box.storeName} :: `,
    `Order ID#: ${payload.box.orderID} :: `,
    `Customer Name: ${payload.box.customerName}`,
    `Delivery Address: ${payload.box.address}`
  );

  eventPool.emit('intransit', { order: payload.box, store: payload.box.storeName, orderID: payload.box.orderID, customer: payload.box.customerName, address: payload.box.address });
}


module.exports = {
  newBox,
}
