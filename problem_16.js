/**
 * 16. 3Sum Closest
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 这个做法就是第15题的做法 
 */
var threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort(function(a, b) { return a - b; });
  const len = sortedNums.length;

  let minD = Number.MAX_SAFE_INTEGER, result;
  for (let i = 0; i < len - 2; i += 1) {
    // 这个优化掉了，所有起始点就大于当前最近距离的方案
    if (sortedNums[i] > target && sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2] - target > minD) {
      return result;
    }

    // 相邻的两个数字相同，实际上是同一种，直接忽略
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = len - 1; j < k;) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

      if (sum === target) {
        return target;
      }
      if (sum > target) {
        if (sum - target < minD) {
          minD = sum - target;
          result = sum;
        }
        k -= 1;
      } else if (sum < target) {
        if (target - sum < minD) {
          minD = target - sum;
          result = sum;
        }
        j += 1;
      }
    }
  }

  return result;
};