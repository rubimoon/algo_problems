module.exports = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let c of str.toLowerCase()) {
    if (vowels.includes(c)) count++;
  }
  return count;
};
