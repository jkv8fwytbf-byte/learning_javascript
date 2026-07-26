// Iterating: Object.keys = own only; for...in includes enumerable prototype members.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const circle = new Circle(1);

console.log(Object.keys(circle)); // ["radius"] — own enumerable only

for (let key in circle) {
  console.log(key); // radius, then draw (enumerable on prototype)
}

console.log(circle.hasOwnProperty("radius")); // true
console.log(circle.hasOwnProperty("draw")); // false — inherited

// Try it:
// - Use for...in and skip inherited keys with hasOwnProperty
// - Compare Object.keys(circle) with Object.getOwnPropertyNames(circle)
