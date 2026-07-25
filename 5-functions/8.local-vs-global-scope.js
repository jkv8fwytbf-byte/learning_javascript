// Scope: where a variable is visible.
// Local = inside a function/block. Global = outside, visible everywhere (avoid when you can).

const color = "red"; // global (for this file)

function start() {
  const message = "hi";
  const color = "blue"; // local — shadows the global inside this function
  console.log(color);
}

function stop() {
  const message = "bye"; // separate local — ok to reuse the name
}

start();
// console.log(message); // Error — message is local to start

// Try it:
// - Create a local variable inside a function and try to log it outside
// - Shadow a global name with a local one and log both (inside vs outside)
