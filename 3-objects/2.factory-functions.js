// Factory function: a function that returns a new object.

function createCircle(radius) {
  // Build the object, then return it (same idea as return { ... } directly).
  const circle = {
    radius,
    draw() {
      console.log("draw");
    },
  };
  return circle;
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);

// Try it:
// - Run createCircle for two different radii
// - Add another property (e.g. color) to the returned object
