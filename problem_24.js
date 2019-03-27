/**
 * 24. swap nodes in pairs
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  // 每两个分组，组和组拼接
  let p = head, groups = [], i = 0;
  while (p) {
    if (i === 0) {
      groups.push([p]);
      p = p.next;
      i += 1;
    } else {
      groups[groups.length - 1][1] = p;
      p = p.next;
      groups[groups.length - 1][0].next = null;
      groups[groups.length - 1][1].next = groups[groups.length - 1][0];
      i = 0;
    }
  }

  for (let j = 0; j < groups.length - 1; j += 1) {
    groups[j][0].next = groups[j + 1][1] || groups[j + 1][0];
  }
  groups[groups.length - 1][0].next = null;

  return groups[0][1];
};