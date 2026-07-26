// Factory function: a function that returns a new object.

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

console.log(circle1);
console.log(circle2);
circle1.draw();

// Try it:
// - Create a third circle with a different radius
// - Add another property (e.g. color) to the returned object
