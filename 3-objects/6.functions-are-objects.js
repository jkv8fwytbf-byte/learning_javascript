// Functions are objects: they have properties and methods too.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// console.log(Circle.name);   // "Circle"
// console.log(Circle.length); // number of parameters (1)
// console.log(typeof Circle); // "function" (still an object under the hood)

// const Circle1 = new Function(
//   "radius",
//   `this.radius = radius;
//    this.draw = function() { console.log("draw"); }`
// );
// const circle = new Circle1(1);

// Try it:
// - Log Circle.name and Circle.length
// - Call Circle.call({}, 1) and inspect the object you pass in
