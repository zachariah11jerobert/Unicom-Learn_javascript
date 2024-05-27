const readLineSync = require('readline-sync');

let total = 0;
for (let i = 1; i <= 10; i = i + 1) {
    total = total + Number(readLineSync.question(`Enter Number ${i}: `));
}

console.log("Toatl of the Entered Number is : " + total)








