const { nanoid } = require("nanoid");
const { faker} = require("@faker-js/faker");
const _ = require("lodash");

// Create a function that generates prodects 
function createItems() {
    //create an object with important key
    let products = {
        // create ID for product
        id: nanoid(4),
        //generate product name
        itemName: faker.commerce.product(),
        //tells if the item is in stock or not 
        inStock: faker.datatype.boolean(),
        //gives a price with dollar and cents between 2 numbers 
        price: faker.finance.amount({ min: 1, max: 50, dec: 2, symbol: '$' }),
        //tells how much of that item is in stock according to inStock being true, if false it will say otherwise 
        amountInStock: null,
    }
    products.amountInStock = Object.keys(products).find(inStock => products[inStock] === true) ? faker.number.int({min: 1, max: 15}) : "Item is not in stock at the moment.";
    //return object with valid keys 
    return products;
}
createItems()

//create a function that pushing the object inside an array
function itemHolder(number) {
    //initialze a variable that equals an empty array
    inventoryItems = [];
    //set up loop so that each object that is created is pushed into the array
    for (let i =0; i < number; i++) {
        //push object into array
        // return array
}
        

}
