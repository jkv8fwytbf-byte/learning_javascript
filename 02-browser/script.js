// This file runs in the browser, not with Node.
// It finds elements on the page and reacts when you click.

const button = document.getElementById("change-btn");
const message = document.getElementById("message");

let clickCount = 0;

button.addEventListener("click", () => {
  clickCount = clickCount + 1;
  message.textContent = "You clicked " + clickCount + " time(s). Nice!";
});

// Try it:
// - Change the message text above.
// - Add a second button in index.html and make it do something new.
