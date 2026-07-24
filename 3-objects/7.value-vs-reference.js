// Primitives are copied by value. Objects are copied by reference.

// --- value (independent copies) ---
let x = 10;
let y = x;
x = 20;
console.log(x, y); // 20, 10

// --- reference (same object in memory) ---
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a, b); // both { value: 20 }

// Try it:
// - Pass a number into a function and change it — does the outer variable change?
// - Pass an object and change a property — does the outer object change?
