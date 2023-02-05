module.exports = (list) => {
  console.log("s1");
  let nextArr = [];
  for (const node of list) {
    if (nextArr.includes(node.next)) return true;
    nextArr.push(node.next);
  }
  return false;
};
