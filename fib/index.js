// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let f0 = 0;
  let f1 = 1;
  let fibArr = [f0, f1];

  for (let i = 2; i <= n; i++) {
    const a = fibArr[i - 1];
    const b = fibArr[i - 2];
    fibArr.push(a + b);
  }

  return fibArr[n];
}

module.exports = fib;
