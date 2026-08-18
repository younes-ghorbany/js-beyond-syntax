/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 01 - Map
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// Example 01

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2,4,6,8]
console.log(numbers); // [1,2,3,4]

// Example 02

const users = [
  { id: 1, name: "Younes", age: 34 },
  { id: 2, name: "Amir", age: 23 },
  { id: 3, name: "Ali", age: 25 },
];

const names = users.map((user) => user.name);

console.log(names);

// React usage

const userList = users.map((user) => `<li>${user.name}</li>`);

console.log(userList); //[ '<li>Younes</li>', '<li>Amir</li>', '<li>Ali</li>' ]                                                                                       │
