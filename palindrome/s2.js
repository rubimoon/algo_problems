// Make use of every array helper
module.exports = (str) =>
  str.split("").every((char, i) => char === str[str.length - i - 1]);
