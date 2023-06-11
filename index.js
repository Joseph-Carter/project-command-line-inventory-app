const fs = require('fs')
const _ = require('lodash')
const { readJSONFile, writeJSONFile } = require("./src/helpers/filehandler");
const { deleteProduct } = require('./src/helpers/delete')
const { showItemsInCart } = require('./src/helpers/list')
const { updateCart } = require('./src/helpers/update')
const {createItems, itemHolder} = require("./src/create")

const command = process.argv[2]

switch (command) {
    case 'destroy': {
      //calls the deleteProduct() function to delete an item form the cart.
      break;
    }
    case 'show':
     //calls the showItemInCart() function to display the items in the cart
      break;
    case 'update': {
     // retrieves the ID, availability, stock, and price from the coommand-line arguments
     // calls the updateCart() function to update an item in the cartw
      break;
    }
    case 'create': {
      //retrieves the number of items from the command line argument
      // generates the items using the itemHolder() function
      //writes the items to the cartlist.json file
      break;
    }
    default:
      console.log('Invalid command.');
  }