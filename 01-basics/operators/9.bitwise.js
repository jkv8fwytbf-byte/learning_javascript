// Bitwise operators work on bits (0s and 1s).
// ponytail: flags demo only — skip bit-twiddling deep dive until you need it.

// Read = 1 (001), Write = 2 (010), Execute = 4 (100)
const read = 1;
const write = 2;
const execute = 4;

let myPermission = 0;
myPermission = myPermission | read | write; // turn flags on
console.log("has read?", Boolean(myPermission & read));
console.log("has write?", Boolean(myPermission & write));
console.log("has execute?", Boolean(myPermission & execute));

myPermission = myPermission & ~write; // turn write off
console.log("has write after ~?", Boolean(myPermission & write));

// Try it:
// - Give yourself execute too with |= and check with &.
