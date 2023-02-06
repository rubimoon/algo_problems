module.exports = (stringA, stringB) => {
  function trimString(str) {
    return str
      .toLowerCase()
      .split("")
      .filter((c) => c !== c.toUpperCase())
      .sort()
      .toString();
  }

  return trimString(stringA) == trimString(stringB);
};
