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

let optionStr = "";
while (optionStr != "exit") {

    let menuStr = "------------------------------\n" +
        "  **** 1 to Add products \n" +
        "  **** 2 to Display products \n" +
        "  **** 3 to Search product ny Name \n" +
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
        case "3":
            searchProductUI();
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

function searchProductUI() {
    let searchProductName = readlineSync.question('Enter Product Name to Search : ');

    let foundIndex = searchProductByName(searchProductName);
    if (foundIndex >= 0) {
        console.log(`Product Found : ${foundIndex}`);
    } else {
        console.log("Product Not Found")
    }
}

function searchProductByName(productName) {
    let foundIndex = -1;
    for (let i = 0; i < products.length; i = i + 1) {
        if (products[i].name == productName) {
            foundIndex = i;
            break;
        }
    }

    return foundIndex;
}
