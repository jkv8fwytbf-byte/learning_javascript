// map builds a new array by transforming each element.
// Chain filter then map when you want "keep some, then reshape".

const numbers = [1, -1, 2, 3];

const doubles = numbers.map(function (n) {
  return n * 2;
});
console.log(doubles);

const labels = numbers
  .filter(function (n) {
    return n >= 0;
  })
  .map(function (n) {
    return "item-" + n;
  });
console.log(labels);

// Try it:
// - Map [1, 2, 3] to their squares
// - Map users to just their names (an array of strings)
