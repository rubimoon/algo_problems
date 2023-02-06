module.exports = (stringA, stringB) => {
  function getCharMap(str) {
    let map = {};
    for (let c of str.toLowerCase()) {
      if (c !== c.toUpperCase()) {
        if (!map[c]) {
          map[c] = 1;
          continue;
        }
        map[c]++;
      }
    }
    return map;
  }

  mapA = getCharMap(stringB);
  mapB = getCharMap(stringA);
  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (const k in mapA) {
    if (mapA[k] !== mapB[k]) {
      return false;
    }
  }
  return true;
};
