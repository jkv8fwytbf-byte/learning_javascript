// Rest operator: ... gathers remaining arguments into a real array.
// Rest must be the last parameter.

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// Try it:
// - Write a function that takes a label and ...items, then logs both
// - What happens if you put ...prices before another parameter?
