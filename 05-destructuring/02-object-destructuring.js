/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  02 - Object Destructuring
 * CHAPTER: 05 - Destructuring, Spread && Rest
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

const user = {
  name: "Younes",
  age: 34,
  city: "Tehran",
};

// Old Ways
// const name = user.name;
// const age = user.age;

// Modern ways
const { name, age, city } = user;
// const { age,name, city } = user;

console.log(name);
console.log(age);
console.log(city);

// Rename

const { name: userName, age: userAge } = user;

console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);

// Default

const { name: name01, role = "user" } = user;

console.log(role);

// Nested Destructuring

const user02 = {
  name: "Younes",
  age: 34,
  address: {
    myCity: "Tehran",
    country: "Iran",
  },
};

const {
  name: name03,
  address: { myCity },
} = user02;

console.log(myCity);
