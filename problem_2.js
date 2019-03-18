/**
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
var addTwoNumbers = function(l1, l2) {
  const sumL = new ListNode(0);

  let node = sumL;
  // 加法寄数器
  let addRegister = 0;
  while(l1 && l2) {
    const sumSingle = l1.val + l2.val + addRegister;
    if (sumSingle >= 10) {
      node.next = new ListNode(sumSingle - 10);
      node = node.next;
      addRegister = 1;
    } else {
      node.next = new ListNode(sumSingle);
      node = node.next;
      addRegister = 0;
    }
    l1 = l1.next;
    l2 = l2.next;
  }

  let augend = l1 ? l1 : l2;
  while(augend) {
    const sumSingle = augend.val + addRegister;
    if (sumSingle >= 10) {
      node.next = new ListNode(sumSingle - 10);
      node = node.next;
      addRegister = 1;
    } else {
      node.next = new ListNode(sumSingle);
      node = node.next;
      addRegister = 0;
    }
    augend = augend.next;
  }

  // 最后进一位
  if (addRegister === 1) {
    node.next = new ListNode(addRegister);
  }

  return sumL.next;
};
