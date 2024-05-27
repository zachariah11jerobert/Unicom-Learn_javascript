const readLineSync = require('readline-sync');

let uiLoop = "";
while (true) {

    arithmeticProgram();
    uiLoop = readLineSync.question('Enter exit to close from program or press any other key to continue : ');

    if (uiLoop == "exit") {
        break;
    }
}

function arithmeticProgram() {
    let number1 = Number(readLineSync.question('Enter Number 1 : '));
    let number2 = Number(readLineSync.question('Enter Number 2 : '));
    let option = readLineSync.question('Enter Your choice as + or - or * or / : ');

    let answer = 0;
    let str = "";

    switch (option) {
        case "+":
            answer = number1 + number2;
            str = "Addition is :  " + answer;
            break;
        case "-":
            answer = number1 - number2;
            str = "Substraction is :  " + answer;
            break;
        case "*":
            answer = number1 * number2;
            str = "Multiplication is :  " + answer;
            break;
        case "/":
            answer = number1 / number2;
            str = "Division is :  " + answer;
            break;
        default:
            str = "No such operation Found"
    }

    console.log(str);

}


