// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const s1 = require("./s1");
const s2 = require("./s2");

function vowels(str) {
  return s2(str);
}

module.exports = vowels;
