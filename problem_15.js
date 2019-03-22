/**
 * 15. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */

// 先排序，然后每次以左侧第一个数为基本，右侧采用两端逼近的方式遍历。这样效率更高
var threeSum = function(nums) {
  const sortedNums = nums.sort(function(a, b) { return a - b; });
  const len = sortedNums.length, result = [];
  let i = 0, j = len - 1;

  if (len < 3) return result;

  for (i = 0; i < len - 2; i += 1) {
    if (sortedNums[i] > 0) {
      break;
    }
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = len - 1; j < k;) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j += 1;
        k -= 1;
        while (j < k && sortedNums[j] === sortedNums[j - 1]) {
          j += 1;
        }
        while (j < k && sortedNums[k] === sortedNums[k + 1]) {
          k -= 1;
        }
      } else if (sum < 0) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }

  return result;
};
