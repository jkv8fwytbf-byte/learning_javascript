// reduce boils an array down to a single value.
// Start the accumulator at 0 when summing numbers.

const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(function (total, n) {
  return total + n;
}, 0);

console.log(sum);

// Try it:
// - Sum [5, 10, 15] with reduce
// - Add a console.log inside the callback to watch total grow each step

// ponytail: sum only — other reduce patterns later if you need them
