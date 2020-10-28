// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// My Solution

// function steps(n) {

//     for (let i = n - 1; i >= 0; i--) {
//       let tempStairs = "";
//       for (let j = n - i; j > 0; j--) {
//         tempStairs += "#";
//       }
//       for (let k = i; k > 0; k--) {
//         tempStairs += " ";
//       }
//       console.log(tempStairs);
//     }
    
// }


// Solution 1

// function steps(n) {

//     for (let row = 0; row < n; row++) {

//       let stair = "";

//       for (let column = 0; column < n; column++) {
//         if (column <= row) {
//             stair += "#";
//         } else {
//             stair += " ";
//         }

//       }

//       console.log(stair);

//     }
    
// }


// Solution 2

// function steps(n, row = 0, stair = '') { // Added row and stair as variables.

//     // Identify a base case, i.e. at what point do we want to stop and return?
//     // Here, it would be if the number being passed, i.e. n, === 0.
//     // TIP! If you have to use recursion, figure out the iterative solution first before you refactor.

//     // 1. Identify what information you have to pass to recursion calls.
//     // 2. Give reasonable defaults.
//     // 3. Check base case.
//             // If row === n, we have hit the end of our problem.
//             // If stair.length === n, we are at the end of a row.
//             // If stair.length <= row number we're on, we add "#", otherwise we add " ".
//     // 4. Make sure you change the argument each time you make the recursion call.

//     if (n === row) { // Check base case
//         return;
//     }

//     if (n === stair.length) {
//         console.log(stair); // When we hit the end of the row, we want to console.log;
//         return steps(n, row + 1); // Not giving stair value because we want to return to the default value of " ";
//         // It's not necessary to return the value of steps. We just need to return something.
//     }

//     if (stair.length <= row) {
//         stair += "#";
//     } else {
//         stair += " ";
//     }

//     // OR 

//     let add = stair.length <= row ? "#" : " ";

//     steps(n, row, stair) // We're still working on the same row.
    
// }


// Solution 3

function steps(n, row = 0, stair = '') { 

    if (n === row) { 
        return;
    }

    if (n === stair.length) {
        console.log(stair); 
        return steps(n, row + 1); 
    }

    let add = stair.length <= row ? "#" : " ";

    steps(n, row, stair + add) // We're still working on the same row.
    
}

module.exports = steps;
