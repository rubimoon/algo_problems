module.exports = (n) => {
  let arr = n.toString().split("").reverse().join("");
  return parseInt(arr) * Math.sign(n);
};
