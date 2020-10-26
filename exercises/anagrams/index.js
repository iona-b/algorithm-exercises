// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// My Solution 1

// function anagrams(stringA, stringB) {

//     let a = stringA.split('').sort().join('')
//     let b = stringB.split('').sort().join('')
    
//     return a === b;

// }


// My Solution 2

// function anagrams(stringA, stringB) {

//     if (stringA.length !== stringB.length) return false;

//     let a = stringA.replace(/[^\w]/g, "").toLowerCase();
//     let b = stringB.replace(/[^\w]/g, "").toLowerCase();
//     let objectA = {};
//     let objectB = {};

//     for (let char of a) {
//         if (!objectA[`${char}`]) {
//             objectA[`${char}`] = 1;
//         } else {
//             objectA[`${char}`]++;
//         }
//     }

//     for (let char of b) {
//         if (!objectB[`${char}`]) {
//             objectB[`${char}`] = 1;
//         } else {
//             objectB[`${char}`]++;
//         }
//     }

//     if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;

//     for (let i in objectA) {
//       if (objectA[`${i}`] !== objectB[`${i}`]) {
//         return false;
//       }
//     }

//     return true;

// }


// Solution 1

// function anagrams(stringA, stringB) {

//     let aCharMap = buildCharMap(stringA);
//     let bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
    
// }

// function buildCharMap(str) {

//     let charMap = {};
    
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;

// }


// Solution 2

function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB);
    
}

function cleanString(str) {

    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    
}

module.exports = anagrams;
