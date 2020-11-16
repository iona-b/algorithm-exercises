// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My Solution

// function fib(n) {

//     let number1 = 1;
//     let number2 = 1;
//     let num = 0;

//     for (let i = 2; i < n; i++) {
//         num = number1 + number2;
//         number1 = number2;
//         number2 = num;
//     }

//     return number2;

// }

// Solution 1: Iterative => Linear Runtime

// function fib(n) {

//     let result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         result.push(result[i - 1] + result[i - 2]);
//     }

//     return result[n];

// }

// Solution 2: Recursive => Exponential Runtime

// function fib(n) {

//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);

// }

// Note that the time complexity for the recursive solution is worse than the iterative solution!
// Exponential runtime: Whenever we increase the number by one, there is a massive increase in how long it takes to compute.
// This is because the function is being called multiple times with the same arguments.
// Memoization: We can can store the arguments of each function call along with the result.

// Solution 3: Recursive with Memoization

// This is a generic function that could be used for different situations.
// Therefore, we want to make sure it can take any number of arguments.
// We can use (...args) to show that we don't know how many arguments to expect.

function memoize(fn) {

    const cache = {};

    return function(...args) {

        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
    
        return result;

    }

}

function fib(n) {

    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);

}

fib = memoize(fib);

module.exports = fib;
