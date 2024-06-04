const readlineSync = require('readline-sync');

const products = [{
    id: 'P001',
    name: 'Apple',
    price: 100,
},
{
    id: 'P002',
    name: 'Orange',
    price: 80,
},
{
    id: 'P003',
    name: 'Banana',
    price: 120,
}];

// let str = "";
// while (str != "no") {

//     addProducts();
//     str = readlineSync.question('---------- Do you want to Continue  yes/no : ');
// }

// console.log(products)

function addProducts() {
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
}

function displayProducts() {
    console.log("------------------------------------------");
    console.log("Product Id\tProduct Name\tProduct Price");
    for (let i = 0; i < products.length; i = i + 1) {
        console.log(`${products[i].id}\t\t${products[i].name}\t\t${products[i].price}`)
    }
    console.log("------------------------------------------");
}

displayProducts();
