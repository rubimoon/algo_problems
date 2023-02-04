// functionを整形するhelper function
const memoize = (fn) => {
  const cache = {};
  // TODO where does the args come from?
  return function (...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

module.exports = { memoize };
