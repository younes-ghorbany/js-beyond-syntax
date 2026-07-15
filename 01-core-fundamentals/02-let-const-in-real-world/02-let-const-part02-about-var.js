/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 03 - let and const Part02: About var && let, const
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// var username = "Younes";

// ECMAScript 2015 (ES6)

// let username = "Younes";
// let score = 0;

let score = 0;

score = 10;
score = 20;

console.log(score);

// const username = "Younes";
//
// username = "Ghorbany";
//
// const username02 = "Amir";
// username02 = "Mansour";

// Const object: properties can still be updated.
const user = {
  name: "Younes",
  role: "Teacher",
};

user.name = "Amir";

console.log(user.name);

// Error
// user = {
//   name: "Mansour",
//   role: "Worker",
// };

// Const array: items can still be changed.
const skills = ["HTML", "CSS"];

skills.push("Javascript");

console.log(skills);

// Error
// skills = ["React", "Next.js"];
