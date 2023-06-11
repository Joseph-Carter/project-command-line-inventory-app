# Command-line Inventory Application Project

## Node modules you need to download:
- `@faker-js/faker@8`
- `jest`
- `lodash@4`
- `nanoid@3`

## These are the commands you need in order to make this application run:

- `npm run create` (number of items to create and add to care ): This command will let you create and add products to the cart that is helped in the cartlist.json file 
        ex. npm run create 3

- `npm run delete`: This command will let you delete an item out of the cart based on the id you put in 
    ex. npm run delete xPUyn

- `npm run update` : This command will let you update the product based on its id you put in if the product is in stock (true or false), how much is in stock, as well as the price
    ex.

        id: 'CTZ1',
        itemName: 'Chips',
        inStock: false,
        price: '$49.46',
        amountInStock: 'Item is not in stock at the moment.'

    ex. `npm run update CTZ1 true 12 9.34`

        id: 'CTZ1',
        itemName: 'Chips',
        inStock: true,
        price: '$9.34',
        amountInStock: 12

- `npm run show` : This command will show all items in your cart(cartlist.json).

- `npm test` : This command will test the create and update files 