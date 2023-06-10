const fs = require('fs');
const _ = require('lodash');

// create delete function to delete certain items by specified id inside the cart when given.
    //create delete fucntion
function deleteProduct() {
    // read whats in the file given, the file and execute err, datta callback
    fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
        //execute if an error occurs during the file reading process
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        //parse the content of the file into json and give the resulting object a variable
        let cartList = JSON.parse(data);
        //remove items from the cartlist variable with a property named id 
        const deletedItem = _.remove(cartList, { id: id });
        // write the changed array back to the file 
        fs.writeFile('./data/cartlist.json', JSON.stringify(cartList, null, 2), (err) => {
            // log and error if if an error occurs otherwise check the length of the deleteditems array 
          if (err) {
            console.log('Error writing file:', err);
          } else {
            if (deletedItem.length > 0) {
              console.log(`Item with ID ${itemId} has been deleted`);
            } else {
              console.log(`No item with ID ${itemId} found`);
            }
          }
        });
    });
}

module.exports = {
    deleteProduct
}