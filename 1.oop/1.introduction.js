// Introduction: objects group related data and functions (methods) together.

// Without an object — scattered variables:
let radius = 1;
let x = 1;
let y = 1;

function draw() {
  console.log("draw");
}

// With an object — one place for related things:
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw: function () {
    console.log("draw");
  },
};

console.log(circle);
circle.draw();

// Try it:
// - Add another property (e.g. color) to circle
// - Call draw again after logging circle
