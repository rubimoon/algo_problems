module.exports = (str) => {
  let result = "";
  let isFirstLetter = true;

  for (let i = 0; i < str.length; i++) {
    if (isFirstLetter) {
      result += str[i].toUpperCase();
      isFirstLetter = false;
    } else if (str[i].trim().length === 0) {
      result += str[i];
      isFirstLetter = true;
    } else {
      result += str[i];
    }
  }

  return result;
};
