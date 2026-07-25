// Spread (...) copies elements out. slice copies a portion.
// Neither changes the original array.

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
const copy = [...first];
const middle = combined.slice(2, 4); // from index 2 up to (not including) 4

copy[0] = 99;

console.log(combined);
console.log(first); // unchanged
console.log(copy);
console.log(middle);

// Try it:
// - Make a copy with spread, change the copy — does first change?
// - slice() with no args — what do you get?
