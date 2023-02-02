// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let dic = {};
  for (let char of str) {
    if (!dic[char]) {
      dic[char] = 1;
    } else {
      dic[char]++;
    }
  }

  let max = 0;
  let maxChar = "";
  for (let char in dic) {
    if (dic[char] > max) {
      max = dic[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
