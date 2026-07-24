// Bitwise operators work on bits (0s and 1s).
// ponytail: flags demo only — skip bit-twiddling deep dive until you need it.

// Read = 1 (001), Write = 2 (010), Execute = 4 (100)
const read = 1;
const write = 2;
const execute = 4;

let myPermission = 0;
myPermission = myPermission | read | write; // turn flags on
console.log(myPermission & read); // non-zero = has read
console.log(myPermission & write); // non-zero = has write
console.log(myPermission & execute); // 0 = no execute

myPermission = myPermission & ~write; // turn write off
console.log(myPermission & write); // 0 = write off

// Try it:
// - Give yourself execute too with |= and check with &.
