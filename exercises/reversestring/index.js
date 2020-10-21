// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My Answer:

// function reverse(str) {

//     let newString  = "";

//     for (let i = str.length - 1; i > -1; i--) {
//         newString = newString.concat(str[i])
//     }

//     return newString;

// }


// Teaching Answer 1A:

// function reverse(str) {

//     let stringArray = str.split('')
//     stringArray.reverse();
//     return stringArray.join('');

// }


// Teaching Answer 1B:

function reverse(str) {

    return str.split('').reverse().join('');

}


// Teaching Answer 2:

// function reverse(str) {



// }


// Teaching Answer 3:

// function reverse(str) {



// }

module.exports = reverse;
