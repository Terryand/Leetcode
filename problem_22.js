/**
 * 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 * 
 * 这题不知道怎么做，直接翻的 solution
 */

/**
 * 回溯
 * （1）针对所给问题，确定问题的解空间：
 *    首先应明确定义问题的解空间，问题的解空间应至少包含问题的一个（最优）解。
 * （2）确定结点的扩展搜索规则
 * （3）以深度优先方式搜索解空间，并在搜索过程中用剪枝函数避免无效搜索。 
 */

/** 解法一: Backtracking 回溯 */
var generateParenthesis = function(n) {
  function backtrack(ans, curStr, open, close, max) {
    // 确定解，也是递归终点
    if (curStr.length === max * 2) {
      ans.push(curStr);
      return ;
    }
    
    // open 代表左括号个数，这个判断用于确定所有解(解空间)
    if (open < max) {
      backtrack(ans, curStr + '(', open + 1, close, max);
    }
    // close 代表右括号个数，这个判断相当于剪枝函数(合法解应该是，已经在队列中的 open 比 close 一一抵消且先出 open 再出 close)
    if (close < open) {
      backtrack(ans, curStr + ')', open, close + 1, max);
    }
  }
  
  const result = [];
  backtrack(result, '', 0, 0, n);
  
  return result;
};


/**
 * 解法二：枚举结果时，通过一些不相交的子集求和，是比较常见的做法
 */
var generateParenthesis = function(n) {
  const result = [];
  if (n === 0) {
    result.push('');
  } else {
    for (let i = 0; i < n; i += 1) {
      const leftResult = generateParenthesis(i);
      for (let left = 0; left < leftResult.length; left += 1) {
        const rightResult = generateParenthesis(n - 1 - i);
        for (right in rightResult) {
          result.push('(' + leftResult[left] + ')' + rightResult[right]);
        }
      }
    }
  }

  return result;
};