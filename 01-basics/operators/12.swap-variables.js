// Exercise: swap the values of a and b.

let a = "red";
let b = "blue";

// Classic way — temporary variable
let temp = a;
a = b;
b = temp;

console.log("a:", a); // blue
console.log("b:", b); // red

// One-liner (destructuring):
// [a, b] = [b, a];

// Try it:
// - Reset a/b to "red"/"blue", then swap with destructuring only.
