// Make use of every array helper

module.exports = (str) => {
  let arr = str.split("");
  let result = true;
  for (let index = 0; index < arr.length; index++) {
    if (result) return (result = arr[index] === arr[arr.length - index - 1]);
  }
  return result;
};
