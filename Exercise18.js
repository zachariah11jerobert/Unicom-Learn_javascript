const readLineSync = require('readline-sync');

let str = "";
while (true) {
    str = readLineSync.question('Enter your choice : ');

    if (str == "exit") {
        break;
    }
}











