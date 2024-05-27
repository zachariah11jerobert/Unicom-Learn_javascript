const readLineSync = require('readline-sync');

let userInput = readLineSync.question('Enter Your Name : ');

console.log("Hello " + userInput);