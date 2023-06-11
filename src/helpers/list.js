const _ = require('lodash');
const products = require('../create');
const fs = require('fs');

function showItemsInCart() {
  fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const cartList = JSON.parse(data);
    _.each(cartList, (item, index) => {
        console.log(`Item ${index + 1}:`);
        console.log(`ID: ${item.id}`);
        console.log(`Name of item: ${item.itemName}`);
        console.log(`In stock: ${item.inStock}`);
        console.log(`Price of Item: ${item.price}`);
        console.log(`Amount in stock currently: ${item.amountInStock}`);
        console.log('--------------------------------');
      });
  });
}

module.exports = {
    showItemsInCart,
};