module.exports = (str) => {
  let reversed = "";
  // avoid using for traditional loop(error-prone)
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
