/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 07 - Conditions and Short-Circuit
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// Logical AND (&&)
// Returns the first falsy value, or the last value if all are truthy.
// -------------------------------------

const result = false && "Hello";
console.log(result); // false

const value = "Younes" && "Javascript";
console.log(value); // Javascript

const result01 = 0 && "Hello";
console.log(result01); // 0 (first falsy)

const result02 = "User" && "Admin";
console.log(result02); // Admin (all truthy, returns last)

const result03 = "A" && 25 && true && "Done";
console.log(result03); // Done (all truthy, returns last)

const result04 = "A" && "" && 100;
console.log(result04); // "" (first falsy)

// -------------------------------------
// Logical OR (||)
// Returns the first truthy value, or the last value if all are falsy.
// -------------------------------------

const result05 = "Ali" || "Guest";
console.log(result05); // Ali (first truthy)

const result06 = "" || "Guest";
console.log(result06); // Guest (first truthy)

const result07 = 0 || null || undefined || "Default";
console.log(result07); // Default (all falsy, returns last)

// -------------------------------------
// Short-circuiting for conditional execution
// -------------------------------------

const isLoggedIn = false;

// The right side only executes if the left side is truthy.
isLoggedIn && console.log("Welcome back!"); // (Does not run)

// -------------------------------------
// Short-circuiting for default values (Caution with falsy values)
// -------------------------------------

const username = "" || "Guest";
console.log(username); // Guest

// -------------------------------------
// Nullish Coalescing (??)
// Returns the right side ONLY if the left side is null or undefined.
// -------------------------------------

const count = 0 ?? 10;
console.log(count); // 0 (0 is falsy, but not nullish)

const nullishResult = undefined ?? null ?? "Fallback";
console.log(nullishResult); // Fallback

const nullishResult02 = undefined ?? "Fallback";
console.log(nullishResult02); // Fallback
