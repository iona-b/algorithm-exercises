// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// My Solution

// function palindrome(str) {

//     return str.split(''). reduce((reversed, character) => character + reversed, '') === str;

// }


// Solution 1

// function palindrome(str) {

    // let reversed = str.split('').reverse().join('');
    // return str === reversed;

    // OR

    // return reversed = str.split('').reverse().join('') === str;

// }


// Solution 2

function palindrome(str) {

    return str.split('').every((char, i) => char === str[str.length - i - 1]);

}



module.exports = palindrome;
