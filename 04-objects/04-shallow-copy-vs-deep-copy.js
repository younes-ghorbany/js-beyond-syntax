/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  04 - Shallow Copy vs Deep Copy
 * CHAPTER: 04 - Objects
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// ---------------------------------------------
// The problem: "copying" an object is NOT what
// it looks like. Spread copies the first level,
// but nested objects are still SHARED references.
// ---------------------------------------------
const original = { name: "ali", address: { city: "Tehran" } };

// 📄 Shallow copy — only level 1 is truly copied
const shallow = { ...original };

shallow.name = "Reza"; // ✅ top-level prop → original is untouched
// shallow.address.city = "Esfehan"; // ❌ nested prop → original changes too!

console.log(original.address.city); // "Esfehan" (after uncommenting the line above)

// --------------------------------------------
// Old-school deep copy: JSON.parse(JSON.stringify())
// Works for plain data, but it's LOSSY:
// Date → string, Set/Map → lost, functions → gone
// ---------------------------------------------
const deep = JSON.parse(JSON.stringify(original));

deep.address.city = "Esfehan";
console.log(original.address.city); // "Tehran" ✅

// ---------------------------------------------
// The modern way: structuredClone()
// Built into the browser & Node — no library needed.
// ---------------------------------------------
const deep02 = structuredClone(original);

const data = { created: new Date(), tags: new Set(["react", "js"]) };

const copy = structuredClone(data);
console.log(copy.created instanceof Date); // true — still a real Date ✅
console.log(copy.tags instanceof Set); // true — still a real Set ✅

// ---------------------------------------------
// The ONE limitation: functions can't be cloned
// ---------------------------------------------
const obj = { greet: () => "hi" };

structuredClone(obj); // ❌ throws DataCloneError
