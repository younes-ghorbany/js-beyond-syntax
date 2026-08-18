/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 04 - Some && Every Methods
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

//Example 01

const scores = [85, 92, 45, 78];

const hasFailed = scores.some((score) => score < 50);

console.log(hasFailed); // true

const allPassed = scores.every((score) => score >= 50);

console.log(allPassed); //false

// React usage

const todos = [
  { id: 1, text: "Recording Chapter03 Today", done: false },
  { id: 2, text: "Editing the videos", done: true },
];

const allDone = todos.every((todo) => todo.done); //false

const hasCompleted = todos.some((todo) => todo.done); //true
