// filter returns a new array of elements that pass the test.
// The original array stays the same.

const numbers = [1, -1, 2, 3, -4];

const positive = numbers.filter(function (n) {
  return n >= 0;
});

console.log(positive);
console.log(numbers);

// Try it:
// - Filter to keep only even numbers
// - Filter users to keep only those with age >= 18
