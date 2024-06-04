const readlineSync = require('readline-sync');

const products = [];

let str = "";
while (str != "no") {

    let productName = readlineSync.question('Enter Product Name : ');
    let productPrice = Number(readlineSync.question('Enter Product Price : '));

    let productId = "P" + Math.floor(Math.random() * 100);
    
    let product = {
        id: productId,
        name: productName,
        price: productPrice,
    }

    products.push(product);

    str = readlineSync.question('---------- Do you want to Continue  yes/no : ');
}

console.log(products)