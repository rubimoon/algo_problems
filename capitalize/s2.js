module.exports = (str) => {
  let words = [];
  for (const w of str.split(" ")) {
    words.push(w[0].toUpperCase() + w.slice(1));
  }
  return words.join(" ");
};
