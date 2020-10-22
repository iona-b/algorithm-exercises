// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My Solution:

// function reverse(str) {

//     let newString  = "";

//     for (let i = str.length - 1; i > -1; i--) {
//         newString = newString.concat(str[i])
//     }

//     return newString;

// }


// Solution 1A:

// function reverse(str) {

//     let stringArray = str.split('')
//     stringArray.reverse();
//     return stringArray.join('');

// }



// Solution 1B:

// function reverse(str) {

//     return str.split('').reverse().join('');

// }


// Solution 2:

// function reverse(str) {

//     let reversed = '';

//     // Wherever possible, avoid classic for loop syntax.

//     // It's preferable to use new ES6 syntax where you can.

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;

// }


// Solution 3:

function reverse(str) {

    return str.split('').reduce((reversed, character) => character + reversed, '');

}

module.exports = reverse;
