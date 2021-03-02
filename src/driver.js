'use strict';

const eventPool = require('./events.js');

function pickedUp(payload) {
  setTimeout(() => {
  console.log('Order#', payload.box.orderID, ' has been picked up');

  eventPool.emit('delivered', payload);
}, 1000);
}

module.exports = {
  pickedUp,
}



// functions for driver responses