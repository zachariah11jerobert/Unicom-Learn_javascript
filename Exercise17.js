const readLineSync = require('readline-sync');

let numberOfElements = Number(readLineSync.question('Enter Number of elements your Need to Add: '));

let total = 0;
for (let i = 1; i <= numberOfElements; i = i + 1) {
    total = total + Number(readLineSync.question(`Enter Number ${i}: `));
}

console.log("Toatl of the Entered Number is : " + total)








