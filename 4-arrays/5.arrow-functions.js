// Arrow functions: shorter syntax for callbacks (especially with find).

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// const course = courses.find(function (course) {
//   return course.name === "a";
// });

const course = courses.find((course) => course.name === "a");
console.log(course);

// Try it:
// - Rewrite the function callback above as an arrow function
// - Use findIndex with an arrow to find id === 2
