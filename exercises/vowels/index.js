// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My Solution

// function vowels(str) {

//     let count = 0;

//     let lowercase = str.toLowerCase();

//     for (letter of lowercase) {
//         if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//             count++;
//         }
//     }

//     return count;

// }


// Solution 1

// function vowels(str) {

//     let counter = 0;
//     const checker = ["a", "e", "i", "o", "u"];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             counter++;
//         }
//     }

//     return counter;

// }


// Solution 2

function vowels(str) {

    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;

}

module.exports = vowels;
