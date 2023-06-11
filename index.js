const fs = require('fs')
const _ = require('lodash')
const { readJSONFile, writeJSONFile } = require("./src/helpers/filehandler");
const { deleteProduct } = require('./src/helpers/delete')
const { showItemsInCart } = require('./src/helpers/list')
const { updateCart } = require('./src/helpers/update')
const {createItems, itemHolder} = require("./src/create");
const { parse } = require('path');

const command = process.argv[2]

switch (command) {
    case 'delete': {
      //calls the deleteProduct() function to delete an item form the cart.
      const { deleteProduct } = require('./src/helpers/delete')
      const id = process.argv[3]
      deleteProduct(id);
      break;
    }
    case 'show':
     //calls the showItemInCart() function to display the items in the cart
     showItemsInCart();
      break;
    case 'update': {
     // retrieves the ID, availability, stock, and price from the coommand-line arguments
     const id = process.argv[3];
     const inStock = process.argv[4] === 'true';
     const stock = parseInt(process.argv[5]);
     const price = parseFloat(process.argv[6]);
     // calls the updateCart() function to update an item in the cartw
     updateCart(id, inStock, stock, price);
      break;
    }
    case 'create': {
      const { createItems, itemHolder } = require('./src/create');
      const { writeJSONFile } = require('./src/helpers/filehandler')
      const numberOfItems = parseInt(process.argv[3]);
      const items = itemHolder(numberOfItems);
      console.log(`${numberOfItems} item(s) placed in cart:\n`, items);
      const existingItems = readJSONFile('./data', 'cartlist.json');
      const updatedItems = existingItems.concat(items);
      writeJSONFile('./data', 'cartlist.json', updatedItems)
      break;
    }
    default:
      console.log('Invalid command.');
  }