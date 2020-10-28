// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// My Solution

function capitalize(str) {

    let capitalized = [];
    let newWord;
  
      let split = str.split(' ');
  
      for (let word of split) {
        newWord = word[0].toUpperCase() + word.slice(1);
        capitalized.push(newWord);
      }
  
      return capitalized.join(' ');
  
}

module.exports = capitalize;
