'use strict';

const faker = require('faker');

/* let randomCity = faker.address.city(); */
let randomOrderID = faker.random.number();
let randomName = faker.name.findName();
let randomAddress = faker.address.streetAddress();


// Dependencies
const eventPool = require('./events.js');
const Box = require('./box.js');
const User = require('./users.js');
const pickup = require ('./vendor.js');
const intransit = require('./driver.js');
const delivered = require('./delivered.js');

const usersInterface = new User();
const boxInterface = new Box();



// Event that will be published, setting up subscribers for events.
eventPool.on('pickup', pickup.newBox);
eventPool.on('intransit', intransit.intransit);
eventPool.on('delivered', delivered.deliveryConfirmation);


// Artificial interaction point.
setInterval(() => {
  eventPool.emit('send', { user: usersInterface.create(randomName, 'UPS'), box: boxInterface.create('Wallingford', randomOrderID, randomName, randomAddress) });
}, 2000);
