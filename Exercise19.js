const readLineSync = require('readline-sync');

let total = 0;
let counter = 1;
while (true) {
    total = total + Number(readLineSync.question('Enter your Number to Add : '));



    if (counter == 10) {
        break;
    }
    counter = counter + 1;
}

console.log(total);









