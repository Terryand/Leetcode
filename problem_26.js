/**
 * 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 * 
 * 只能使用 O(1) 的额外空间，并且需要原地修改原数组( 返回的值会被解析成索引，截取原数组的子数组，比较结果 )。
 */
var removeDuplicates = function(nums) {
  let vIndex = 0, nowStard;
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (i === 0) {
      vIndex += 1;
      nowStard = nums[i];
    } else if (nums[i] !== nowStard) {
      nums[vIndex] = nums[i];
      nowStard = nums[i];
      vIndex += 1;
    }
  }

  return vIndex;
};