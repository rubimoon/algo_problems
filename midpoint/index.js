// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let i = list.getFirst();
  if (!i) return null;

  if (!i.next || !i.next.next) return i;

  let slow = i.next;
  let fast = i.next.next;
  while (fast.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
