'use strict';

const boxes = require('../src/vendor.js');

// this swaps the normal console.log funciton with a jest function for mock testing.

console.log = jest.fn();

describe('Testing the sending module', () => {
  it('should console log some output', () => {

    let payload = { user: { name: 'Jacob' }, message: { text: 'test', sender: 'Jacob', receiver: 'Jacob' } };

    boxes.newBox(payload);
    expect(console.log).toHaveBeenCalled();

    
  });
});
