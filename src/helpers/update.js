const fs = require('fs');
const _ = require('lodash');

function updateCart(id, inStock, stock, price) {
  // Read the contents of the 'cartlist.json' file
  fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
    // Check for errors during file reading
    
    });
  }
  
  module.exports = {
    updateCart,
  }