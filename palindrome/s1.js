module.exports = (str) =>
  str === str.split("").reduce((rev, char) => char + rev, "");
