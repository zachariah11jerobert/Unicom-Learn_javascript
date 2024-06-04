let str1 = "the quick brown fox";
let str2 = "Hello how are you";



function splitSentence(str) {
    var word = "";
    var words = [];

    let wordCounter = 0;

    for (let i = 0; i <= str.length; i = i + 1) {


        if (str[i] == " " || str[i] == str[str.length]) {
         
            words[wordCounter] = word;
            word = "";
            wordCounter = wordCounter + 1;
        } else {
           
            word = word + str[i].toUpperCase();

        }

    }

    return words;
}

console.log(splitSentence(str1))
console.log(splitSentence(str2))
