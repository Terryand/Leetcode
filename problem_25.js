/**
 * 25. Reverse Nodes in k-Group
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // 组内翻转
  function reversedGroup(group) {
    const len = group.length;
    for (let i = len - 1; i > 0; i -= 1) {
      group[i].next = group[i - 1];
    }
    group[0].next = null;
  }

  if (!head || !head.next) return head;
  
  let p = head, groups = [], i = 0;
  while (p) {
    if (i === 0) {
      groups.push([p]);
      p = p.next;
    } else {
      groups[groups.length - 1].push(p);
      p = p.next;
      if (i === k - 1) {
        reversedGroup(groups[groups.length - 1]);
      }
    }

    i += 1;
    if (i >= k) i = 0;
  }

  // 组间拼接
  const len = groups.length;
  for (let i = 0; i < len - 1; i += 1) {
    groups[i][0].next = groups[i + 1].length === k ? groups[i + 1][k - 1] : groups[i + 1][0];
  }

  const startLen = groups[0].length;
  return startLen === k ? groups[0][k - 1] : groups[0][0];
};