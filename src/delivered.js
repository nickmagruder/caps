'use strict';

function deliveryConfirmation(payload) {
  setTimeout(() => {
    console.log('Order#', payload.box.orderID, ' has been delivered! :-)');
  }, 3000);
}

module.exports = {
    deliveryConfirmation,
}