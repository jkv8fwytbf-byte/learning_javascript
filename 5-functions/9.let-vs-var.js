// let vs var: let is block-scoped; var is function-scoped (and attaches to window in browsers).

// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   // console.log(i); // Error with let — i only exists inside the for block
// }

// function startVar() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i); // works with var — i is visible in the whole function
// }

// start();
// startVar();

// Try it:
// - Change let to var in a for loop and log i after the loop
// - Prefer let (or const) for new code
