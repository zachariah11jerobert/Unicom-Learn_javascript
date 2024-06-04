let str1 = "medam";

function palindrome(str1) {
    let str2 = "";
    // reverse 
    for (let i = str1.length - 1; i >= 0; i = i - 1) {
        str2 = str2 + str1[i];
    }

    console.log(str2);

    let palindromeStatus = 0;
    for (let j = 0; j < str1.length; j = j + 1) {
        if (str1[j] == str2[j]) {
            palindromeStatus = 1;
        } else {
            palindromeStatus = 0;
            break;
        }
    }

    if (palindromeStatus == 1) {
        return true;
    }

    return false;
}

console.log(palindrome(str1));