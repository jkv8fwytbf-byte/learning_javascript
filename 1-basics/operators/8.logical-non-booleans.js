// Falsy values: false, 0, "", null, undefined, NaN.
// Everything else is truthy.
// && and || return a value (not always a boolean) — they short-circuit.

console.log(false || "default");
console.log("" || "guest");
console.log("mosh" || "guest");

console.log(true && "hi");
console.log(false && "hi");

// Common pattern: default value
const userColor = undefined;
const color = userColor || "blue";
console.log(color);

// Try it:
// - Set userColor to "" and see what color becomes. Why?
