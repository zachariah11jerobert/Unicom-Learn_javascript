const readlineSync = require('readline-sync');

const products = [
    {
        id: 'P001',
        name: 'Apple',
        price: 100,
    }
];

let productId = readlineSync.question('Enter Product ID : ');
let productName = readlineSync.question('Enter Product Name : ');
let productPrice = Number(readlineSync.question('Enter Product Price : '));

//
let product = {
    id: productId,
    name: productName,
    price: productPrice,
}

products.push(product);

console.log(products)