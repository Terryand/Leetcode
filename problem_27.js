/**
 * 27.Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * modifying the input array in-place with O(1) extra memory
 */
var removeElement = function(nums, val) {
  const len = nums.length;

  let vPointer = len;
  // 扫描整个数组，记录截止的有效位置，然后将扫描到的 value 移动到截止有效数字以外
  for (let i = 0; i < vPointer; i += 1) {
    if (nums[i] === val) {
      vPointer --;
      let tmp = nums[vPointer];
      nums[vPointer] = nums[i];
      nums[i] = tmp;
      
      // 交换后需要再次扫描该点
      i -= 1;
    }
  }

  // 结果数组是 nums.slice(0, vPointer)
  return vPointer;
};

removeElement([3, 2, 2, 3], 3);
