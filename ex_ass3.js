let str1 = "the quick brown fox";
let str2 = "Hello how are you";



function splitSentence(str) {
    let word = "";
    let words = [];

    let wordCounter = 0;

    for (let i = 0; i <= str.length; i = i + 1) {

        // console.log(str.charAt(i));

        //console.log(str[i]);

        if (str[i] == " " || str[i] == str[str.length]) {
            //console.log("space");
            //console.log(word);
            words[wordCounter] = word;
            word = "";
            wordCounter = wordCounter + 1;
        } else {
            word = word + str[i];

        }

    }

    return words;
}

console.log(splitSentence(str1))
console.log(splitSentence(str2))
