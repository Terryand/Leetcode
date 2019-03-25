/**
 * 21. Merge Two Sorted Lists
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l2) return l1;
  if (!l1) return l2;

  const add1 = l1.val <= l2.val ? l1 : l2;
  const add2 = l1.val <= l2.val ? l2 : l1;

  const result = add1;
  let pointer1 = add1.next, pointer2 = add2, pointerR = result;
  while(pointer1 && pointer2) {
    if (pointer1.val <= pointer2.val) {
      pointerR.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      pointerR.next = pointer2;
      pointer2 = pointer2.next;
    }

    pointerR = pointerR.next;
  }

  while(pointer1) {
    pointerR.next = pointer1;
    pointerR = pointerR.next;
    pointer1 = pointer1.next;
  }

  while(pointer2) {
    pointerR.next = pointer2;
    pointerR = pointerR.next;
    pointer2 = pointer2.next;
  }

  return result;
};