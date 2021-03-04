'use strict';

const socketio = require('socket.io');
const io = socketio(3000);

const caps = io.of('/caps');

const orderQueue = {

  pickup: {},
  intransit: {},
  delivered: {},
  received: {}, // all received messages go here once received 

}


// handlers needed:
//    received
//    getALL
//    delivered


caps.on('connection', (socket) => {
  console.log('Socket connected : ', socket.id);

socket.on('pickup', (payload) => {
  console.log(payload.orderID);
  orderQueue.pickup[payload.orderID] = payload;
  socket.broadcast.emit('pickup', payload);
/*   console.log(orderQueue); */
});

socket.on('intransit', (payload) => {
/*   console.log('INTRANSIT EVENT: ', payload.orderID); */
  socket.broadcast.emit('intransit', payload);
});

socket.on('delivered', (payload) => {
  delete orderQueue.pickup[payload.orderID];
  orderQueue.delivered[payload] = payload;
  socket.broadcast.emit('delivered', payload);
});

  socket.on('getDriverMessages', () => {
    for (let key in orderQueue.pickup) {
      socket.emit('pickup', orderQueue.pickup[key]);
    }

    socket.on('getVendorMessages', () => {
      for (let key in orderQueue.delivered) {
        socket.emit('delivered', orderQueue.delivered[key]);
      }
});
});
});
