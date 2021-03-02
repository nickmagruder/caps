'use strict';

const events = require('./events.js');

function confirmation(payload) {
  console.log('Order ', payload.box.orderID, 'is in-transit');

  events.emit('delivered', { order: payload.order });
}

module.exports = {
  confirmation,
}


// functions for driver responses