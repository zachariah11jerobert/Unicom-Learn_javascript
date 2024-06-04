const readlineSync = require('readline-sync');

const products = [];

let str = "";
while (str != "no") {
    let productId = readlineSync.question('Enter Product ID : ');
    let productName = readlineSync.question('Enter Product Name : ');
    let productPrice = Number(readlineSync.question('Enter Product Price : '));

    let product = {
        id: productId,
        name: productName,
        price: productPrice,
    }

    products.push(product);

    str = readlineSync.question('---------- Do you want to Continue  yes/no : ');
}

console.log(products)