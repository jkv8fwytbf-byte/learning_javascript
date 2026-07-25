// Changing this: bind it with call/apply/bind, a self variable, or an arrow function.

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Option 1: arrow function (keeps this from showTags)
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });

    // Option 2: second argument to forEach is `thisArg`
    // this.tags.forEach(function (tag) {
    //   console.log(this.title, tag);
    // }, this);
  },
};

function playVideo(a, b) {
  console.log(this, a, b);
}
playVideo.call({ name: "Sidd" }, 1, 2);   // args listed
playVideo.apply({ name: "Sidd" }, [1, 2]); // args in an array
playVideo.bind({ name: "Sidd" })();       // returns a new function

video.showTags();

// Try it:
// - Fix showTags with an arrow callback so this.title works
// - Try call vs apply with the same object and two numbers
