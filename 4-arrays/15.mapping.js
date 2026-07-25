// Mapping: map builds a new array by transforming each element.

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map(function (n) {
  return "<li>" + n + "</li>";
});
const html = "<ul>" + items.join("") + "</ul>";
console.log(html);

// const items = filtered.map((n) => ({ value: n }));
// console.log(items);

// Try it:
// - Map [1, 2, 3] to their doubles
// - Map numbers to objects like { value: n }
