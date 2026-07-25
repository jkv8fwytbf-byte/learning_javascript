// Hoisting: declarations are moved to the top of their scope before the code runs.
// Function declarations are fully hoisted; function expressions are not.

walk(); // works — declaration is hoisted
function walk() {
  console.log("walk");
}

// run(); // Error — const/let are not usable before this line
const run = function () {
  console.log("run");
};

// Try it:
// - Call a function declaration before its line — does it work?
// - Try the same with a const function expression
