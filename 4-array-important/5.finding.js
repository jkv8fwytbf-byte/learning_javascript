// includes: is this value in the array? (good for numbers/strings)
// find: first element that passes a test (good for objects)

const tags = ["js", "html", "css"];
console.log(tags.includes("js"));
console.log(tags.includes("python"));

const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Grace" },
];

const user = users.find(function (u) {
  return u.name === "Grace";
});
console.log(user);

// Try it:
// - Check if "css" is in tags
// - find the user with id 1
