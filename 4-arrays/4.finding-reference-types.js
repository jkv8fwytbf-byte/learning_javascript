// Finding reference types: use find / findIndex with a predicate function.
// Objects are compared by reference, so indexOf won't help.

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// const course = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(course);

// const index = courses.findIndex(function (course) {
//   return course.name === "a";
// });
// console.log(index);

// Try it:
// - find the course with id 2
// - findIndex for a name that does not exist (expect -1)
