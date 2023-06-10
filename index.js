const fs = require('fs')
const _ = require('lodash')
const { readJSONFile, writeJSONFile } = require("./src/helpers/filehandler");
const { deleteProduct } = require('./src/helpers/delete')
const { showItemsInCart } = require('./src/helpers/list')
const { updateCart } = require('./src/helpers/update')
const {createItems, itemHolder} = require("./src/create")



switch (command) {
    case 'destroy': {
      
      break;
    }
    case 'show':
     
      break;
    case 'update': {
     
      break;
    }
    case 'create': {

      break;
    }
    default:
      console.log('Invalid command.');
  }