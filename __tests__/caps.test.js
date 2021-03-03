'use strict';

const boxes = require('../src/vendor.js');

// this swaps the normal console.log funciton with a jest function for mock testing.

console.log = jest.fn();

xdescribe('Testing the sending module', () => {
  it('should console log some output', () => {

/*     let box = { 
      storeName: 'Wallingford',  
      orderID: 1000,
      customerName: 'Carol Smirthington',
      address: '10000 986th Ave'
    };

    boxes.newBox(box);
    expect(console.log).toHaveBeenCalled(); */

  });
});
