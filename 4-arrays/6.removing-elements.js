// Removing elements: pop (end), shift (start), splice (middle).

const numbers = [1, 2, 3, 4];

const last = numbers.pop();
const first = numbers.shift();
numbers.splice(2, 1); // from index 2, remove 1 item

console.log(numbers);

// Try it:
// - pop the last element and log what was removed
// - Use splice to remove the middle element
