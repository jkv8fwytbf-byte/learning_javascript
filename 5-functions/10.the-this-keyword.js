// this: depends on how a function is called.
// Method → the object. Regular function → global (window/global), or undefined in strict mode.

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag); // this is NOT video here
//     });
//   },
// };

// video.showTags();

// function playVideo() {
//   console.log(this);
// }
// playVideo(); // global object (or undefined in modules / strict mode)

// Try it:
// - Log this inside a method on an object
// - Log this inside a regular function — how does it differ?
