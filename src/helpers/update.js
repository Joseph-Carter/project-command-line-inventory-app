const fs = require('fs');
const _ = require('lodash');

function updateCart(id, inStock, stock, price) {
  // Read the contents of the 'cartlist.json' file
  fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
    // Check for errors during file reading
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    // Parse the JSON data into an array of objects
    let cartList = JSON.parse(data);
    // Find the item in the cart with the specified ID
    const itemsInCart = _.find(cartList, { id: id });
    // Check if the item exists in the cart
    if (itemsInCart) {
        // Update the item properties with the provided values
        itemsInCart.inStock = inStock;
        itemsInCart.amountInStock = stock;
        itemsInCart.price = price;
        // Write the modified cart back to the 'cartlist.json' file
        fs.writeFile('./data/cartlist.json', JSON.stringify(cartList, null, 2), (err) => {
          // Check for errors during file writing
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