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
    this.first = new Stack();
    this.second = new Stack();
  }
  add(value) {
    this.first.push(value);
  }

  peek() {
    while (this.first.peek()) {
      let ele = this.first.pop();
      this.second.push(ele);
    }

    const result = this.second.peek();

    while (this.second.peek()) {
      let ele = this.second.pop();
      this.first.push(ele);
    }
    return result;
  }

  remove() {
    while (this.first.peek()) {
      let ele = this.first.pop();
      this.second.push(ele);
    }

    const result = this.second.pop();

    while (this.second.peek()) {
      let ele = this.second.pop();
      this.first.push(ele);
    }
    return result;
  }
}

module.exports = Queue;
