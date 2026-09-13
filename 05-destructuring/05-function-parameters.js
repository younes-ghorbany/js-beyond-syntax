/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  05 - Function Parameters
 * CHAPTER: 05 - Destructuring, Spread && Rest
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// Without Destructuring
function greet(user) {
  console.log(`Hello ${user.name}, your age ${user.age}.`);
}

// With Destructuring
function greet01({ name, age }) {
  console.log(`Hello ${name}, your age ${age}.`);
}

const user = {
  name: "Younes",
  age: 34,
  role: "Admin",
};

greet(user);
// greet01(user);
greet01({ name: "Younes", age: 34 });

// Default value
function createUser({ name, role = "user", active = true } = {}) {
  return { name, role, active };
}

console.log(createUser(user));
console.log(createUser());
