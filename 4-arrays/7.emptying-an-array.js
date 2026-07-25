// Emptying an array: several ways; pick based on whether others still reference it.

let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];

// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(another);

// Try it:
// - Point another at numbers, then empty with length = 0 — check both
// - Try numbers = [] and see if another still has the old values
