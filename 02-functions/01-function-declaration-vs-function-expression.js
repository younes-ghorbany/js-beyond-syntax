/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 01 - Function Declaration vs Function Expression
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// Function Declaration
// A named function defined with the `function` keyword.
// -------------------------------------

function sayHello() {
  console.log("Hello! 👋");
}

// -------------------------------------
// Function Expression
// A function stored as a value in a variable.
// -------------------------------------

const sayHello2 = function () {
  console.log("Hello! 👋");
};

// -------------------------------------
// Hoisting: Function Declaration
// Declarations can be called before their definition.
// -------------------------------------

greet();

function greet() {
  console.log("Hello dear");
}

// -------------------------------------
// Hoisting: Function Expression
// The variable exists in the Temporal Dead Zone until initialization.
// -------------------------------------

greet2(); // ❌ Cannot access 'greet2' before initialization

const greet2 = function () {
  console.log("Hello dear");
};

// -------------------------------------
// React Components
// Both patterns can define a component.
// -------------------------------------

// Function Declaration
function App() {
  return null;
}

// Function Expression
const App = function () {
  return null;
};
