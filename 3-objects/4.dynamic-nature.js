// Objects are dynamic: you can add, change, or delete properties later.

const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};
delete circle.color;
delete circle.draw;

console.log(circle);

// Try it:
// - Add a color property, then delete it
// - Add a method, call it, then delete it
