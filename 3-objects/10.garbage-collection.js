// Garbage collection: JS frees memory when nothing points at an object anymore.
// You don't call a GC function — just stop holding references.

let circle = {};
console.log(circle);
circle = null; // last reference gone → object is eligible for cleanup

// Try it:
// - Create an object, then set the variable to null
// - (Nothing visible happens — that's normal; the engine cleans up later)
