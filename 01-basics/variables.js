// Variables store values so you can reuse them later.
// Use const when the value will not be reassigned.
// Use let when you need to change the value later.

const name = "Siddharth";
let age = 25;
let likesJavaScript = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Likes JavaScript:", likesJavaScript);

// You can update values created with let:
age = age + 1;
console.log("Age next year:", age);

// Strings (text) can be combined:
const greeting = "Hi, " + name + "!";
console.log(greeting);

// Modern way to build strings (template literal):
const alsoGreeting = `Hi, ${name}! You will be ${age}.`;
console.log(alsoGreeting);

// Try it:
// - Change name to your preferred name.
// - Add a new const for your favorite food and log it.
