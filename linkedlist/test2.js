const { LinkedList } = require("./index");

let list = new LinkedList();
let start = new Date().getTime();

for (let index = 0; index < 10000000; index++) {
  list.insertFirst(index);
}

let end = new Date().getTime();
const size = list.size();
console.log(size);
console.log(end - start);
