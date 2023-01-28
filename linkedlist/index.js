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
    // the first node becomes the next node
    const node = new Node(data, this.head);
    // the list must know where the first node is in order to insert the first
    this.head = node;
    this.lengh++;
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
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) break;
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;
    let prev;

    while (node) {
      if (!node.next) {
        if (!prev) {
          this.head = null;
        } else {
          prev.next = null;
        }
        break;
      }
      prev = node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
