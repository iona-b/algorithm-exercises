// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// For Bubble Sort, we compare each number with the one next to it.
// If it's larger than the one to its right, we move it one place right.
// If it's smaller, we leave it alone.
// Eventually, the largest number in the array will get all the way to the right.
// In that case, we can reduce the span that we are searching through (i.e. we don't have to compare each element with the final element in the array, because we already know that it's the largest.).
// Gradually, the larger elements move more to the right.

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }

    return arr;

}

// For Selection Sort, we start off at the first element, i.e. set i to 0.
// We assume that element is the smallest and so we set that to min.
// We then iterate from i + 1 to the end of the array.
// We check each value to see if it's less than the current element we're looking at.
// If so, we update the indexOfMin to be the new element.
// If not, we just move on.
// We keep moving up and doing the same until we get to the end of the array.
// When we get to the end of the array, we see if i and indexOfMin are the same.
// If not, we swap them.
// That way, the smallest element in the array is now in the first position.
// We increment i by 1.

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (i !== indexOfMin) {
            let temp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = temp;
        }

    }

    return arr;

}

// Contains the recursive features of the function.

function mergeSort(arr) {

    if (arr.length === 1) {
        return arr;
    }

    let midPoint = Math.floor(arr.length / 2);
    let left = arr.slice(0, midPoint);
    let right = arr.slice(midPoint);

    return merge(mergeSort(left), mergeSort(right));

}

// Takes two sorted arrays and merges them into one sorted array.

function merge(left, right) {

    let sorted = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(left).concat(right);

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
