// push adds to the end. pop removes from the end.
// These change the original array (they mutate it).

const tasks = ["wash dishes", "buy milk"];

tasks.push("walk dog");
console.log(tasks);

const done = tasks.pop();
console.log(done);
console.log(tasks);

// Try it:
// - push two more tasks, then pop one
// - Log .length after each push and pop

// ponytail: skipped unshift/shift/splice — add when you need the start or middle
