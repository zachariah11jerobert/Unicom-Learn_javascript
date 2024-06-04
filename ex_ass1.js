let str1 = ['m', 'a', 'd', 'a', 'm'];

let str2 = ['n', 'u', 'r', 's', 'e', 's', 'r', 'a', 'n']

function checkPalindrome(str) {
    let palindromeStatus = 0;
    for (let i = 0; i < str.length; i = i + 1) {
        // console.log(str[i], str[(str.length - 1) - i]);

        if (str[i] == str[(str.length - 1) - i]) {
            palindromeStatus = 1;
        } else {
            palindromeStatus = 0;
            break;
        }
    }

    if (palindromeStatus == 1) {
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }
}

checkPalindrome(str1);
checkPalindrome(str2);