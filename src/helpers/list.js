const _ = require('lodash');
const products = require('../create');
const fs = require('fs');

// write a function that list out all of the information that is create in the object. 
function showItemsInCart() {
     // Read the contents of the 'cartlist.json' file
  fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
    // Check for errors during file reading
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    // Parse the JSON data into an array of objects
    const cartList = JSON.parse(data);
    //Iterate over each item in the cart
    _.each(cartList, (item, index) => {
        console.log(`Item ${index + 1}:`);
        console.log(`ID: ${item.id}`);  // Print the item ID
        console.log(`Name of item: ${item.itemName}`);  // Print the item's name
        console.log(`In stock: ${item.inStock}`);  // Print the item's availability
        console.log(`Price of Item: ${item.price}`);  // Print the item's price
        console.log(`Amount in stock currently: ${item.stock}`);  // Print the item's current stock quantity
        console.log('--------------------------------');
      });
  });
}

module.exports = {
    showItemsInCart,
};