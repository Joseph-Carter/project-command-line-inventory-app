const { updateCart } = require('../src/helpers/update')
const fs = require('fs')
const _ = require('lodash')

describe('updateCart', () => {
    test('Should be able to update the cart only when command is given to do so', () => {
        const id = '123';
        const inStock = true;
        const stock = 10;
        const price = 25.99

        fs.readFile = jest.fn((path, encoding, callback) => {
            const data = '[{"id": "123","inStock": false,"amountInStock": 0,"price": 0.0}]';
            callback(null, data);
        })
        fs.writeFile = jest.fn((path, data, options ,callback) => {
            const updatedCart = JSON.parse(data);
            const updatedItem = _.find(updatedCart, { id });

            expect(updatedItem.inStock).toBe(inStock);
            expect(updatedItem.amountInStock).toBe(stock);
            expect(updatedItem.price).toBe(price);
        })
        updateCart(id, inStock, stock, price)
    });
    
});
