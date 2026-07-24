// Falsy values: false, 0, "", null, undefined, NaN.
// Everything else is truthy.
// && and || return a value (not always a boolean) — they short-circuit.

console.log("false || 'default' =", false || "default");
console.log("'' || 'guest' =", "" || "guest");
console.log("'mosh' || 'guest' =", "mosh" || "guest");

console.log("true && 'hi' =", true && "hi");
console.log("false && 'hi' =", false && "hi");

// Common pattern: default value
const userColor = undefined;
const color = userColor || "blue";
console.log("color:", color);

// Try it:
// - Set userColor to "" and see what color becomes. Why?
