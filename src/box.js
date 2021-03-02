'use strict';

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

module.exports = Box;
