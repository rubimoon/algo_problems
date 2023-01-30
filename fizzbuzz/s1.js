module.exports = (n) => {
  const FIZZ = 3;
  const BUZZ = 5;
  const FIZZ_STR = "fizz";
  const BUZZ_STR = "buzz";
  if (n < 1) return;

  let counter = 1;
  let result;
  while (counter <= n) {
    if (counter % FIZZ !== 0 && counter % BUZZ !== 0) {
      console.log(counter);
    } else {
      result = "";
      if (counter % FIZZ === 0) result = result + FIZZ_STR;
      if (counter % BUZZ === 0) result = result + BUZZ_STR;
      console.log(result);
    }
    counter++;
  }
};
