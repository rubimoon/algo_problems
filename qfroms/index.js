// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  add(value) {
    this.stackOne.push(value);
  }

  peek() {
    let result;
    while (this.stackOne.data.length > 0) {
      let ele = this.stackOne.pop();
      this.stackTwo.push(ele);
    }
    result = this.stackTwo.peek();

    while (this.stackTwo.data.length > 0) {
      let ele = this.stackTwo.pop();
      this.stackOne.push(ele);
    }

    return result;
  }

  remove() {
    let result;
    while (this.stackOne.data.length > 0) {
      let ele = this.stackOne.pop();
      this.stackTwo.push(ele);
    }
    result = this.stackTwo.pop();

    while (this.stackTwo.data.length > 0) {
      let ele = this.stackTwo.pop();
      this.stackOne.push(ele);
    }
    return result;
  }
}

module.exports = Queue;
