module.exports = (array, size) => {
  const result = [];

  for (const element of array) {
    // [[chunked],[chunked],[chunked]]
    const theChunked = result[result.length - 1];

    if (!theChunked || theChunked.length === size) {
      // push new [] as theChunked into result array
      result.push([element]);
    } else {
      theChunked.push(element);
    }
  }
  return result;
};
