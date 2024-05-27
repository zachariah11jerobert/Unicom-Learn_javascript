const readLineSync = require('readline-sync');

let number1 = Number(readLineSync.question('Enter Number 1 : '));
let number2 = Number(readLineSync.question('Enter Number 2 : '));
let option = readLineSync.question('Enter Your choice as + or - or * or / : ');

let answer = 0;
if (option == "+") {
    answer = number1 + number2;
    console.log("Addition is :  " + answer);
} else if (option == "-") {
    answer = number1 - number2;
    console.log("Substraction is :  " + answer);
} else if (option == "*") {
    answer = number1 * number2;
    console.log("Multiplication is :  " + answer);
} else if (option == "/") {
    answer = number1 / number2;
    console.log("Division is :  " + answer);
}



