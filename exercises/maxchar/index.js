// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My Solution

// function maxChar(str) {

//     let stringHash = {};

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i-1]) {
//           stringHash[`${str[i]}`] = 1;
//         } else {
//           stringHash[`${str[i]}`]++;
//         }
//     }

//     let sortedHash = Object.entries(stringHash).sort((a,b) => b[1]-a[1]);

//     return sortedHash[0][0];

// }


// Solution 1

// function maxChar(str) {

//     let charMap = {};
//     let max = 0;
//     let maxChar = ';'

//     for (let char of str) {
//         charMap[char] = charMap[char]++ || 1;
//         if (charMap[char] > max) {
//             maxChar = char
//         }
//     }

//     return maxChar;

// }


// Solution 2

function maxChar(str) {

    let charMap = {};
    let max = 0;
    let maxChar = ';'

    for (let char of str) {
        charMap[char] = charMap[char]++ || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
