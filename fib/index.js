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
  let fi = 0;

  let fibArr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fi = f0;
    } else if (i === 1) {
      fi = f0 + f1;
    } else {
      fi = fi + fibArr[i - 2];
    }
    fibArr.push(fi);
  }
  return fi;
}

module.exports = fib;
