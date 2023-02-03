module.exports = (array, size) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunked = [];
    for (let w = i; w < i + size; w++) {
      chunked.push(array[w]);
    }
    result.push(chunked);
  }
  return result;
};
