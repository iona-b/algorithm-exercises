// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// My Solution

// function reverseInt(n) {

//     n = n.toString().split('');

//     let negative;

//     if (n[0] === "-") {
//         negative = true;
//     } else {
//         negative = false;
//     }

//     let reversedN = n.reduce((reversed, char) => char + reversed, '');

//     if (negative === true) {
//         return parseInt(reversedN) - parseInt(reversedN) * 2
//     } else {
//         return parseInt(reversedN)
//     }

// }


// Solution 1

// function reverseInt(n) {

//     let negative = Math.sign(n)
  
//     n = n.toString().split('');

//     let reversedN = n.reduce((reversed, char) => char + reversed, '');

//     if (negative === -1) {
//         return parseInt(reversedN) * -1
//     } else {
//         return parseInt(reversedN)
//     }
  
// }

// Solution 2

function reverseInt(n) {

    let reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);

    // OR 

    // return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
  
}

module.exports = reverseInt;
