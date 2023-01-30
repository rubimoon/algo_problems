module.exports = (n) => {
  let counter = 1;
  const FIZZ = "fizz";
  const BUZZ = "buzz";
  if (n < 1) return;

  while (counter <= n) {
    if (counter % 3 === 0 && counter % 5 === 0) console.log(FIZZ + BUZZ);
    if (counter % 3 === 0 && counter % 5 !== 0) console.log(FIZZ);
    if (counter % 5 === 0 && counter % 3 !== 0) console.log(BUZZ);
    if (counter % 3 !== 0 && counter % 5 !== 0) console.log(counter);
    counter++;
  }
};
