'use strict';

const socketio = require('socket.io');
const io = socketio(3000);


/* const vendor = io.of('/vendor');
const driver = io.of('/driver'); */

const caps = io.of('/caps');


io.on('connection', (socket) => {
  console.log('New connection created :' + socket.id);
  });


/* eventEmitter.on('pickup', async (payload) => {
  console.log('Package-Ready Sent to Driver', payload);
  eventEmitter.emit('intransit', { test: test });
}); */
/* io.on('pickup', (socket) => {
  
  console.log('Package-Ready Sent to Driver', payload);
  io.emit('intransit', payload);

}) */


caps.on('connection', (capsSocket) => {

  console.log('New Caps Connection ', capsSocket.id);

  capsSocket.on('pickup', (payload) => {
    console.log('PICKUP EVENT: ', payload);
    chatSocket.broadcast.emit('pickup', payload);
  });

  capsSocket.on('intransit', (payload) => {
    console.log('INTRANSIT EVENT: ', payload);
    chatSocket.broadcast.emit('intransit', payload);
  });

  capsSocket.on('delivered', (payload) => {
    console.log('DELIVERED EVENT: ', payload);
    chatSocket.broadcast.emit('delivered', payload);
  });

});