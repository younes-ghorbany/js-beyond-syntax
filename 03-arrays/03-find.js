/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 03 - Find
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// Find method Example
const users = [
  { id: 1, name: "Younes" },
  { id: 2, name: "Samira" },
  { id: 3, name: "Mohammad" },
];

const user = users.find((u) => u.id === 2);

console.log(user); // {id: 2, name: "Samira"}

// Find return undefined when nothing is found
const ghost = users.find((u) => u.id === 999);
console.log(ghost); // undefined
