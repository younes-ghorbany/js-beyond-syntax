/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  03 - Immutable Update
 * CHAPTER: 04 - Objects
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// ---------------------------------------------
// The Golden Rule of React: never mutate in place.
// Why? React compares by reference (===). If the
// object is the SAME, React skips re-rendering.
// ---------------------------------------------
const user = { name: "Ali", age: 24 };

// ❌ Mutates the original — React won't notice the change
// user.age = 26;

// ✅ Creates a BRAND NEW object — new reference → React re-renders
const updatedUser = { ...user, age: 26 };

// ---------------------------------------------
// Example 02: the spread (...) is SHALLOW
// It copies only the first level — nested objects
// still point to the original!
// ---------------------------------------------
const user02 = {
  name: "Younes",
  address: { city: "Tehran", country: "Iran" },
};

// ❌ Mutates the nested object — same reference inside
user02.address.city = "Esfehan";

// ✅ Spread EVERY level you touch, all the way down
const updatedUser02 = {
  ...user02,
  address: { ...user02.address, city: "Esfehan" },
};

// ---------------------------------------------
// three golden patterns for React state
// ---------------------------------------------
const todos = [
  { id: 1, text: "Learn JS", done: true },
  { id: 2, text: "Learn React", done: false },
];

// ➕ Add — spread the old ones, append the new one
const added = [...todos, { id: 3, text: "Learn Rust", done: false }];

// ✏️ Update — .map replaces the matched item with a copy
const updated = todos.map((todo) => {
  todo.id === 2 ? { ...todo, done: true } : todo;
});

// 🗑️ Remove — .filter keeps everything EXCEPT the match
constremoved = todos.filter((todo) => todo.id !== 1);
