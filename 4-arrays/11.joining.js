// Joining: join turns an array into a string; split does the reverse.

const numbers = [1, 2, 3];

const joined = numbers.join(",");
console.log(joined);

const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);
console.log(parts.join("-"));

// Try it:
// - join [1, 2, 3] with "-" 
// - split a sentence into words, then join them with a space
