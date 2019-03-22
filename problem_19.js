/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 19. Remove Nth Node From End of List
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 要求在一次遍历中获取
 */

/**
 * 可以定一个长度为 n 的队列，然后在遍历中入队列出队列，最后输出队列里面的第一个 
 */
var removeNthFromEnd = function(head, n) {
  const arr = [];
  let pushIndex = 0, node = head, parent = null;

  while (node) {
    arr.push(node);
    node = node.next;
    if (pushIndex < n) {
      pushIndex += 1;
    } else {
      arr.reverse();
      parent = arr.pop();
      arr.reverse();
    }
  }

  if (parent) { 
    parent.next = arr[0].next;
  } else {
    head = head.next;
  }
  return head;
};