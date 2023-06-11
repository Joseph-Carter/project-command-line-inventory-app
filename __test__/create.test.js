const { it } = require('@faker-js/faker');
const { createItems, itemHolder } = require('../src/create')

describe('createItems', () => {
    test('should create an object that consists of 5 keys: id, itemName, inStock, price, amountInStock', () => {
        const actual = createItems()
        expect(actual).toHaveProperty('id', 'itemName', 'inStock', 'price', 'amountInStock')
    });
});

describe('itemHolder', () => {
    test('Should push created items object into an array.', () => {
        const actual = itemHolder()
        expect(actual).toEqual(expect.arrayContaining(actual))
    });
});