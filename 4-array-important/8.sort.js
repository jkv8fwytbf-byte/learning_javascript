// sort changes the array in place.
// Default sort is alphabetical (as strings) — bad for numbers.
// Pass a compare function for numbers: (a, b) => a - b

const words = ["banana", "apple", "cherry"];
words.sort();
console.log(words);

const numbers = [10, 2, 5];
numbers.sort(); // wrong for numbers: "10" before "2"
console.log(numbers);

numbers.sort(function (a, b) {
  return a - b; // ascending
});
console.log(numbers);

// Try it:
// - Sort [10, 2, 5] ascending, then descending (b - a)
// - Sort ["z", "a", "m"] alphabetically
