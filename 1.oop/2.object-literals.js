// Object literal: create an object with curly braces { }.

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

console.log(circle.radius); // dot notation
console.log(circle["location"]); // bracket notation
circle.draw();

// Try it:
// - Change radius with both dot and bracket notation
// - Add a color property and log it
