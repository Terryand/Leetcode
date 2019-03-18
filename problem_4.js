/**
 * 4.Median of Two Sorted Arrays 寻找两个有序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 这题最恐怖的是，居然是数学方法计算的。算完之后，居然变成了二叉树的搜索
 * 具体计算看这里 https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/
 */

/**
 * 下面的实现是采用了类似于插入排序的思想(当然没有排序后的数组)。
 * 即，通过一遍遍历，确定新数组中，某一个位置应该是哪一个数组的元素。
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums1Len = nums1.length,
        nums2Len = nums2.length;
  const sumLen = nums1Len + nums2Len;
  const medianStart = sumLen % 2 === 0 ? (Math.floor(sumLen / 2) - 1) : Math.floor(sumLen / 2);
  const medianEnd = Math.floor(sumLen / 2);

  let j1 = 0, j2 = 0, numLeft, numRight;
  for(let i = 0; i < sumLen; i += 1) {
    let num;
    if ((nums1[j1] !== undefined && nums2[j2] === undefined) || nums1[j1] <= nums2[j2]) {
      num = nums1[j1];
      j1 += 1;
    } else {
      num = nums2[j2];
      j2 += 1;
    }

    if (i === medianStart) {
      numLeft = num;
    }
    if(i === medianEnd) {
      numRight = num;
      break;
    }
  }

  return (numLeft + numRight) / 2;
};
