/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
    var matched = target - nums[i];
    var index = nums.indexOf(matched);
    if (index >= 0 && index !== i) {
      return [i, index];
    }
  }
};
