/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 03 - Callback functions
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// What is a Callback?
// A function passed as an argument to another function.
// -------------------------------------

const sayBye = () => {
  console.log("Byeee 👋");
};

// Higher-order function: receives a function as a parameter.
const processUser = (name, callback) => {
  console.log(`Processing ... ${name}`);
  callback();
};

// Passing `sayBye` as the callback.
processUser("Younes", sayBye);

// -------------------------------------
// Example: setTimeout
// Callbacks power asynchronous tasks in JavaScript.
// -------------------------------------

setTimeout(() => {
  console.log("2 Seconds passed");
}, 2000);

// -------------------------------------
// Example: Event Handlers (React & DOM)
// The callback runs only when the event fires.
// -------------------------------------

button.addEventListener("click", () => {
  console.log("Clicked!");
});
