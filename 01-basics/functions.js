// A function is a reusable block of code.
// You define it once, then call it whenever you need it.

function sayHello(personName) {
  console.log("Hello, " + personName + "!");
}

sayHello("Siddharth");
sayHello("world");

// Functions can return a value instead of (or as well as) printing:
function add(a, b) {
  return a + b;
}

const sum = add(3, 4);
console.log("3 + 4 =", sum);

// Arrow function — another common way to write a short function:
const multiply = (a, b) => {
  return a * b;
};

console.log("6 * 7 =", multiply(6, 7));

// Try it:
// - Write a function called greet that takes a name and returns a string.
// - Call it and console.log the result.
