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
    this.lengh = 0;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  // get size based on the definition of linked list
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    let last = this.getLast();
    if (!last) {
      this.head = new Node(data);
      return;
    }
    last.next = new Node(data);

    //TODO this.insertAt(data, this.size() - 1);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) return node;
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    // when the list is empty
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    // when the list is not empty

    // insert to 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // insert to the middle
    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
