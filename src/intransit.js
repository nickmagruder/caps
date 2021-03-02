'use strict';

const eventPool = require('./events.js');

function intransit(payload) {
  console.log('Message for ', payload.userId, ' has been received');

  eventPool.emit('read', { text: payload.text });
}

module.exports = {
  intransit,
}
