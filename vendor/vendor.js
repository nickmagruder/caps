'use strict';

const io = require('socket.io-client');
const hostURL = 'http://localhost:3000';
const vendorURL = 'http://localhost:3000/vendor';


const hostServer = io.connect(hostURL);



/* let randomOrderID = faker.random.number();
let randomName = faker.name.findName();
let randomAddress = faker.address.streetAddress(); */


class Box {
  constructor() {
    this.db = [];
  }
  
  create(storeName, orderID, customerName, address) {
    let entry = {
      storeName,
      orderID,
      customerName,
      address
    };
    this.db.push(entry);
    return entry;
  }
}

/* const boxInterface = new Box(); */

hostServer.on('pickup', (payload) => {
  function newBox(payload) {
  
    console.log('Package Ready for Pickup!',
      `Store: ${payload.box.storeName} :: `,
      `Order ID#: ${payload.box.orderID} :: `,
      `Customer Name: ${payload.box.customerName}`,
      `Delivery Address: ${payload.box.address}`
    );
  }
    hostServer.emit('intransit', 'TESTpayload');
});





/* setInterval(() => {
  eventPool.emit('pickup', { 
    box: boxInterface.create('Wallingford', randomOrderID, randomName, randomAddress)
  });
}, 5000); */

