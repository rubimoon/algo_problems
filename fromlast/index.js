// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// lastからnこspaceを歩く
function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  //まずlastの位置を把握しておく
  const theLast = list.getLast();

  // slowとfastは常にnこspaceを保つ
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  //  fastでlastを探していく
  while (fast != theLast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
