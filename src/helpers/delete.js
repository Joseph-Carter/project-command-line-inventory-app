const fs = require('fs');
const _ = require('lodash');


function deleteProduct(id) {
    fs.readFile('./data/cartlist.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        let cartList = JSON.parse(data);
        const deletedItem = _.remove(cartList, { id: id}); 
        fs.writeFile('./data/cartlist.json', JSON.stringify(cartList, null, 2), (err) => {
          if (err) {
            console.log('Error writing file:', err);
          } else {
            if (deletedItem.length > 0) {
              console.log(`Item with ID ${id} has been deleted`);
            } else {
              console.log(`No item with ID ${id} found`);
            }
          }
        });
    });
}

module.exports = {
    deleteProduct
}