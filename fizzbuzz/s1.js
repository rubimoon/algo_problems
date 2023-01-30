module.exports = (n) => {
  const FIZZ = 3;
  const BUZZ = 5;
  const FIZZ_STR = "fizz";
  const BUZZ_STR = "buzz";
  if (n < 1) return;

  let counter = 1;
  while (counter <= n) {
    if (counter % FIZZ === 0 && counter % BUZZ === 0)
      console.log(FIZZ_STR + BUZZ_STR);
    if (counter % FIZZ === 0 && counter % BUZZ !== 0) console.log(FIZZ_STR);
    if (counter % BUZZ === 0 && counter % FIZZ !== 0) console.log(BUZZ_STR);
    if (counter % FIZZ !== 0 && counter % BUZZ !== 0) console.log(counter);
    counter++;
  }
};
