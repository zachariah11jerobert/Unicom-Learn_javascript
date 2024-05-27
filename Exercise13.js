const readLineSync = require('readline-sync');

let number1 = Number(readLineSync.question('Enter Number 1 : '));
let number2 = Number(readLineSync.question('Enter Number 2 : '));

let answer = number1 + number2;


console.log("Addition is :  " + answer);