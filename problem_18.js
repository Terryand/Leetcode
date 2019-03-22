/**
 * 18. 4Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const sortedNums = nums.sort(function(a, b) { return a - b; });
  const len = sortedNums.length, result = [];

  if (len < 4) {
    return result;
  }

  for (let i = 0; i < len - 3; i += 1) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    
    for (let j = i + 1; j < len - 2; j += 1) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

      for (let k = j + 1, l = len - 1; k < l;) {
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[k] + sortedNums[l];
        if (sum === target) {
          result.push([sortedNums[i], sortedNums[j], sortedNums[k], sortedNums[l]]);
          k += 1;
          l -= 1;
          while (k < l && sortedNums[k] === sortedNums[k - 1]) {
            k += 1;
          }
          while (k < l && sortedNums[l] === sortedNums[l + 1]) {
            l -= 1;
          }
        } else if (sum < target) {
          k += 1;
        } else {
          l -= 1;
        }
      }
    }
  }

  return result;
};
