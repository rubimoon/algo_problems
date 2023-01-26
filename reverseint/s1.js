module.exports = (n) => {
  let isNegative = n < 0;
  let arr = n.toString().split("");

  for (let index = arr.length - 1; index <= 0; index--) {
    if (arr[index] == 0) {
      arr.slice(index);
    } else {
      break;
    }
  }

  let reversedArr = arr.reverse().join("");
  let result = isNegative ? parseInt(reversedArr) / -1 : parseInt(reversedArr);

  console.log(result);
  return result;
};
