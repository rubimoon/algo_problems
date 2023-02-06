// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let objA = {};
  let objB = {};
  let isAnagram = true;

  for (let c of stringA.toLowerCase()) {
    if (c !== c.toUpperCase()) {
      if (!objA[c]) {
        objA[c] = 1;
        continue;
      }
      objA[c]++;
    }
  }

  for (let c of stringB.toLowerCase()) {
    if (c !== c.toUpperCase()) {
      if (!objB[c]) {
        objB[c] = 1;
        continue;
      }
      objB[c]++;
    }
  }

  if (stringA.length >= stringB.length) {
    for (const k in objA) {
      isAnagram = objA[k] === objB[k];
      if (!isAnagram) break;
    }
  } else {
    for (const k in objB) {
      isAnagram = objA[k] === objB[k];
      if (!isAnagram) break;
    }
  }

  return isAnagram;
}

module.exports = anagrams;
