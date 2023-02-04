module.exports = (n) => {
  let f0 = 0;
  let f1 = 1;
  let fibArr = [f0, f1];

  for (let i = 2; i <= n; i++) {
    const a = fibArr[i - 1];
    const b = fibArr[i - 2];
    fibArr.push(a + b);
  }

  return fibArr[n];
};
