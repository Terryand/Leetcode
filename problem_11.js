/**
 * 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */

// 实际上是 slide window 的变种。两端逼近，取两端中比较高的那个柱子继续为基点
var maxArea = function(height) {
  const len = height.length;
  let max = 0, leftBar = 0, rightBar = len - 1;

  while(leftBar < rightBar) {
    max = Math.max(max, (rightBar - leftBar) * Math.min(height[leftBar], height[rightBar]));

    // 保留高的那个柱子，扔掉矮的那个柱子，实际上是 -- 抛弃所有使用矮的柱子，且距离比当前距离短的 "池子"
    if (height[leftBar] > height[rightBar]) {
      rightBar -= 1;
    } else {
      leftBar += 1;
    }
  }

  return max;
};