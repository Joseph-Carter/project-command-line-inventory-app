const { nanoid } = require("nanoid");
const { faker} = require("@faker-js/faker");
const _ = require("lodash");


function createItems() {
    let products = {
        id: nanoid(4),
        itemName: faker.commerce.product(),
        inStock: faker.datatype.boolean(),
        price: faker.finance.amount({ min: 1, max: 50, dec: 2, symbol: '$' }),
        amountInStock: null,
    }
    products.amountInStock = Object.keys(products).find(inStock => products[inStock] === true) ? faker.number.int({min: 1, max: 50}) : "Item is not in stock at the moment.";
    return products;
}
createItems()

function itemHolder(number) {
    inventoryItems = [];
    for (let i =0; i < number; i++) {
        inventoryItems.push(createItems())
    }
    return inventoryItems;
}

module.exports = {
    createItems,
    itemHolder,
}