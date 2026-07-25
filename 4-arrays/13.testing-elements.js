// Testing elements: every (all must pass) and some (at least one passes).

const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

// Try it:
// - Use every to check if all numbers are positive
// - Use some to check if at least one is negative
