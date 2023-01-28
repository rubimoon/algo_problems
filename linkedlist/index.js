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
    if (!this.head) return;

    let node = this.head;
    let prev;
    while (node.next) {
      prev = node;
      node = node.next;
    }

    if (!prev) {
      this.head = null;
    } else {
      prev.next = null;
    }

    // set node to be null
    // remove the reference from previous.next
  }

  insertLast(data) {
    let last = this.getLast();
    if (!last) {
      this.head = new Node(data);
      return;
    }
    last.next = new Node(data);
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
    // solution1: not using getAt()

    // let prev;
    // let node = this.head;
    // let counter = 0;
    // while (node) {
    //   if (index == counter) {
    //     prev.next = node.next;
    //     if (node == this.head) {
    //       this.head = node.next;
    //     }
    //     if (!prev) return;
    //     return;
    //   }
    //   prev = node;
    //   node = node.next;
    //   counter++;
    // }

    // solution2: using getAt()

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    let node = new Node(data);

    if (index === 0) {
      if (this.head) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
        node.next = this.head.next;
      }
    } else {
      const prev = this.getAt(index - 1);
      const last = this.getLast();
      const size = this.size();
      if (index > size - 1) {
        last.next = node;
        return;
      }
      if (!prev) return;
      node.next = prev.next;
      prev.next = node;
    }
  }
}

module.exports = { Node, LinkedList };
