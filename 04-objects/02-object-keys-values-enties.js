/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  02 - Object keys, values, entries
 * CHAPTER: 04 - Objects
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// ---------------------------------------------
// The problem: arrays have .map/.filter/.reduce...
// objects have NONE of them. These three methods
// are the bridge: object → array → superpowers
// ---------------------------------------------
const scores = {
  math: 90,
  science: 85,
  history: 78,
};

// keys() → just the property names
console.log(Object.keys(scores)); // ["math", "science", "history"]

// values() → just the values
console.log(Object.values(scores)); // [90, 85, 78]

// entries() → [key, value] pairs — perfect for .map in React
console.log(Object.entries(scores)); // [["math", 90], ["science", 85], ["history", 78]]

// ---------------------------------------------
// Example 02: values() + reduce = instant stats
// ---------------------------------------------

const values = Object.values(scores);
const average = values.reduce((sum, score) => sum + score, 0) / values.length;

console.log(average); // 84.33

// ---------------------------------------------
// Example 03: the classic "is this object empty?" check
// (objects have no .length — keys() gives us one)
// ---------------------------------------------
const settings = {};

console.log(Object.keys(settings).length); // 0

// You'll see this exact pattern in real codebases everywhere
if (Object.keys(settings).length === 0) {
  console.log("No settings yet!");
}

// ---------------------------------------------
// Object.fromEntries — the round trip:
// object → entries → filter → back to object
// ---------------------------------------------

// Destructuring [subject, score] right in the callback params
const passed = Object.fromEntries(
  Object.entries(scores).filter(([subject, score]) => score > 80),
);

console.log(passed); // {math: 90, science: 85}
