'use strict';

function deliveryConfirmation(payload) {
  setTimeout(() => {
    console.log('Message read!');
  }, 3000);
}

module.exports = {
    deliveryConfirmation,
}