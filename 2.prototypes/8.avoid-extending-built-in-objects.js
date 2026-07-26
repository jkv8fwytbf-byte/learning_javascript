// Avoid extending built-in objects (Array, String, Object, etc.).

// Anti-pattern — don't do this in real apps:
Array.prototype.shuffle = function () {
  // demo only
  return this.sort(() => Math.random() - 0.5);
};

const numbers = [1, 2, 3, 4];
console.log(numbers.shuffle());

// Why avoid it:
// - Can break other libraries that expect built-ins to stay clean
// - Future JS might add a real method with the same name
// - Harder for other developers to understand your code

// Better: write your own helper (or subclass) instead of changing Array.
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

console.log(shuffle([1, 2, 3, 4]));

// Clean up the demo so we don't leave Array dirty:
delete Array.prototype.shuffle;

// Try it:
// - Prefer shuffle(array) over Array.prototype.shuffle
// - Think of one more built-in you should not extend (e.g. String)
