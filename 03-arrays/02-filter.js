/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 02 - Filter
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// Example 01
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2,4,6]

// Example 02
const products = [
  { id: 1, name: "laptop", price: 45000000, inStock: true },
  { id: 2, name: "mouse", price: 5000000, inStock: false },
  { id: 3, name: "keyboard", price: 20000000, inStock: true },
  { id: 4, name: "monitor", price: 340000000, inStock: false },
];

const available = products.filter((product) => product.inStock);

console.log(available); //output ⬇️
// [                                                                                                                                            │
//   { id: 1, name: 'laptop', price: 45000000, inStock: true },                                                                                 │
//   { id: 3, name: 'keyboard', price: 20000000, inStock: true }                                                                                │
// ]                                                                                                                                            │

// React usage
const withoutMouse = products.filter((product) => product.name !== "mouse");
