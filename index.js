const fs = require('fs')
const _ = require('lodash')
const { readJSONFile, writeJSONFile } = require("./src/helper/filehandler");
const { deleteProduct } = require('./src/heleprs/destroy')
const { showProductList } = require('./src/helpers/list')
const { updateProducts } = require('./src/helpers/update')
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