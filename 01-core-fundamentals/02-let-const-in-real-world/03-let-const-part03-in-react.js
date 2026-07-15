/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 04 - let and const Part03: let && const in React
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// --- MUTATION: Direct modification of objects or arrays ---
const user = {
  name: "Younes",
  role: "Teacher",
};

// Mutation: Direct change to property
user.name = "Samira";

const skills = ["HTML", "CSS"];

// Mutation: Direct change to array content
skills.push("Javascript");

// --- REACT CONTEXT: Prefer Immutability ---
// Instead of mutating:
user.name = "Amir";

// We prefer creating new objects (Declarative):
const updatedUser = {
  ...user,
  name: "Amir",
};

// --- LET VS CONST ---
// Use 'let' when you know the variable value needs to change
let totalPrice = 0;
totalPrice = totalPrice + 100;
totalPrice = totalPrice + 200;

// Use 'const' by default (prevents accidental reassignment)
const taxRate = 10;

// --- MODERN RULE: Default to 'const' ---
const courseName = "JS for react && next.js";

// Use 'let' only when reassignment is required
let total = 0;
for (let price of [100, 200, 300]) {
  total = total + price;
}
console.log(total);

// --- CONST MISCONCEPTION ---
// 'const' ensures the variable binding doesn't change,
const currentYear = new Date().getFullYear();
