module.exports = (str) => {
  let result = "";
  let isFirstLetter = false;

  for (let i = 0; i < str.length; i++) {
    if (i == 0 || isFirstLetter) {
      result = result + str[i].toUpperCase();
      isFirstLetter = false;
    } else if (str[i].trim().length === 0) {
      result = result + str[i];
      isFirstLetter = true;
    } else {
      result = result + str[i];
    }
  }

  return result;
};
