const { memoize } = require("../utils/memoization");

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
