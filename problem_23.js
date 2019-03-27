/**
 * 23. Merge k Sorted Lists
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/** 每次比较每个链表的头，在结果链表后追加最小的 */
var mergeKLists = function(lists) {
  // 比较获取当前指针处的最小值
  function getMinNode(nodes) {
    nodes.sort((a, b) => (b.val - a.val));
    return nodes.pop();
  }

  // 每一个单链表都给一个指针
  let pointers = lists.filter(item => !!item);
  let result = null, pointerR = null;

  while (pointers && pointers.length > 0) {
    let nowNode = getMinNode(pointers);
    if (!result) {
      result = nowNode;
      pointerR = result;
    } else {
      pointerR.next = nowNode;
      pointerR = pointerR.next;
    }

    nowNode = nowNode.next;
    // 去掉已经为空的队列
    if (nowNode) pointers.push(nowNode);
  }

  return result;
};

// 上面这段代码效率奇低 To be continued ...
