const fs = require('fs');
const _ = require('lodash');

function updateCart(id, inStock, stock, price) {
  fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    let cartList = JSON.parse(data);
    const itemsInCart = _.find(cartList, { id: id });
    if (itemsInCart) {
        itemsInCart.inStock = inStock;
        itemsInCart.amountInStock = stock;
        itemsInCart.price = price;
        fs.writeFile('./data/cartlist.json', JSON.stringify(cartList, null, 2), (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log(`Item with ID ${id} has been updated.`);
          }
        });
      } else {
        console.log(`No item with ID ${id} has been found.`);
      }
    });
  }
  
  module.exports = {
    updateCart,
  }