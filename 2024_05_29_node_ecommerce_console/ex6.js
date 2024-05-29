const readlineSync = require('readline-sync');

const products = [];

let optionStr = "";
while (optionStr != "exit") {

    let menuStr = "------------------------------\n" +
        "  **** 1 to Add products \n" +
        "  **** 2 to Display products \n" +
        "  **** exit to Exit \n" +
        " Enter your option : ";

    optionStr = readlineSync.question(menuStr);

    switch (optionStr) {
        case "1":
            addProducts();
            break;
        case "2":
            displayProducts();
            break;
        default:
            console.log("No such opeartion");
    }
}

function addProducts() {
    console.log("==================================");
    let productName = readlineSync.question('Enter Product Name : ');
    let productPrice = Number(readlineSync.question('Enter Product Price : '));

    let productId = "P" + Math.floor(Math.random() * 100);
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
    console.log("------------------------------------------");
    for (let i = 0; i < products.length; i = i + 1) {
        console.log(`${products[i].id}\t\t${products[i].name}\t\t${products[i].price}`)
    }
    console.log("------------------------------------------");
}

