// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// My Solution

// function pyramid(n) {

//     let totalColumns = n + n - 1;
//     let emptySpaces = totalColumns - 1;

//     for (let row = n - 1; row > -1; row--) {

//       let level = "";

//       for (let column = 0; column < totalColumns; column++) {
//         if (column < Math.floor(emptySpaces/2) || column >= totalColumns - Math.floor(emptySpaces/2)) {
//             level += " ";
//         } else {
//             level += "#";
//         }
//       }

//       console.log(level);

//       emptySpaces -= 2;

//     }

// }


// Solution 1

// function pyramid(n) {

//     let midPoint = Math.floor((2 * n - 1) / 2);

//     for (let row = 0; row < n; row++) {

//       let level = "";

//       for (let column = 0; column < 2 * n - 1; column++) {
//         if (midPoint - row <= column && midPoint + row >= column) {
//             level += "#";
//         } else {
//             level += " ";
//         }
//       }

//       console.log(level);

//     }

// }


// Solution 2 

// function pyramid(n, row = 0, level = "") {

//     let totalColumns = 2 * n - 1;
//     let midPoint = Math.floor((2 * n - 1) / 2);

//     if (n === row) { 
//         return;
//     }

//     if (level.length === totalColumns) {
//         console.log(level); 
//         return pyramid(n, row + 1); 
//     }

//     let add = midPoint - row <= level.length && midPoint + row >= level.length ? "#" : " ";

//     pyramid(n, row, level + add);

// }

// Solution 3

function pyramid(n, row = 0, level = "") {

    if (n === row) { 
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level); 
        return pyramid(n, row + 1); 
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }

    pyramid(n, row, add)

}

module.exports = pyramid;
