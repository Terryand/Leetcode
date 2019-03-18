/**
 * 3. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 * 
 * 算法思路：slide window
 * 滑动的窗口 (slide window) 是一个处理字符串/数组的好方法
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length,
        sArray = s.split('');
  let ans = 0;
  // 窗口的左右边界
  let i = j = 0;
  // 窗口中的值
  let window = '';
  
  while(i < len && j < len) {
    if (window.indexOf(sArray[j]) < 0) {
      window = s.slice(i, j + 1);
      j += 1;
      ans = Math.max(ans, j - i);
    } else {
      window = s.slice(i + 1, j);
      i += 1;
    }
  }

  return ans;
};

/**
 * 补充一个写法很变态的。这个方法执行相对会慢一点，因为 reduce 方法会比上面的遍历多遍历不同的组合。
 * 但是不妨碍这个很帅
 * @param {*} s 
 */
function lengthOfLongestSubstring2(s) {
  const map = {};
  var left = 0;
  
  return s.split('').reduce((max, v, i) => {
      left = map[v] >= left ? map[v] + 1 : left;
      map[v] = i;
      return Math.max(max, i - left + 1);
  }, 0);
}

/**
 * 最后补充一个最快的执行方案。
 * 使用了 Map 类型代替 string.indexOf() 方法。使搜索重复子串速度加快
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxLen = 0, strMap = new Map(), leftPoint = 0, rightPoint = 0;
  for (var i = 0; i < s.length; i++) {
      if (strMap.get(s[i]) >= 0) {
          maxLen = Math.max(maxLen, rightPoint - leftPoint);
          leftPoint = leftPoint <= strMap.get(s[i]) ? strMap.get(s[i]) + 1 : leftPoint;
          rightPoint++;
          strMap.set(s[i], i);
      } else {
          strMap.set(s[i], i);
          rightPoint++;
      }
  }
  
  maxLen = Math.max(maxLen, rightPoint - leftPoint);
  return maxLen;
};
