/**
 * 5. Longest Palindromic Substring
 * 
 * @param {string} s
 * @return {string}
 * 
 * 下面的实现是 O(n^2) 的时间复杂度和 O(1) 的空间复杂度
 * 算法是基于动态规划的优化( 降低了空间复杂度 )。
 */
var longestPalindrome = function(s) {
  const len = s.length;
  const arr = s.split('');
  let max = 0, tag, index, duration;

  for (let i = 0; i < len; i += 1) {
    let j = 0;
    while((i - j) >= 0 && (i + j) < len) {
      if (arr[i - j] === arr[i + j]) {
        if (max < (j * 2 + 1)) {
          max = j * 2 + 1;
          index = i;
          tag = 1;
          duration = j;
        } 
        j += 1;
      } else {
        break;
      }
    }

    let k = 1;
    while((i - k + 1) >= 0 && (i + k) < len) {
      if (arr[i - k + 1] === arr[i + k]) {
        if (max < (k * 2)) {
          max = k * 2;
          index = i;
          tag = 2;
          duration = k;
        }
        k += 1;
      } else {
        break;
      }
    }
  }

  let start = end = 0;
  if (tag === 1) {
    start = index - duration;
    end = index + duration;
  } else if (tag === 2) {
    start = index  - duration + 1;
    end = index + duration;
  }
  return s.slice(start, end + 1);
};
