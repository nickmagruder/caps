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
    console.log(entry, 'BOX DB ENTRY');
    return entry;
  }
}

module.exports = Box;
