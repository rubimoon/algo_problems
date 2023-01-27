// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // the head store the first node
    this.head = null;
    // this.lengh = 0;
  }

  insertFirst(data) {
    // the first node becomes the next node
    const node = new Node(data, this.head);
    // the list must know where the first node is in order to insert the first
    this.head = node;
    // this.lengh++;
  }

  size() {
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
}

module.exports = { Node, LinkedList };
