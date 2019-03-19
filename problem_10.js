/**
 * 10. Regular Expression Matching
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/**
 * 动态规划 (自上而下的动态规划和递归差不多，这里主要实现自下而上的递归) -- 该方法是下面几个方法中效率最高的
 * memo[i][j] 代表 s[i:] 和 p[j:] ( s 的 i 位和 p 的 j 位之后子串 ) 是否匹配。
 */
var isMatch = function(s, p) {
  if (!p) return s === p;

  const dp = [], sLen = s.length, pLen = p.length;

  dp[sLen] = [];
  dp[sLen][pLen] = true;

  for (let i = sLen; i >= 0; i -= 1) {
    for (let j = pLen - 1; j >= 0; j -= 1) {
      const firstMatch = (i < sLen && (p.charAt(j) === s.charAt(i) || p.charAt(j) === '.'));

      if (!dp[i]) dp[i] = [];
      if (j + 1 < pLen && p.charAt(j + 1) === '*') {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
      console.log(dp);
    }
  }
  return !!dp[0][0];
};
console.log(isMatch('aa', 'a'));

// 递归法
var isMatchWithRecursion = function(s, p) {
  if (!p) return !s;
  
  const firstMatch = s && (p.charAt(0) === s.charAt(0) || p.charAt(0) === '.');

  if (p.length > 1 && p.charAt(1) === '*') {
    return isMatch(s, p.substr(2)) || (firstMatch && isMatch(s.substr(1), p));
  } else {
    return firstMatch && isMatch(s.substr(1), p.substr(1));
  }
};

/**
 * 另辟蹊径，采用动态构建正则表达式的方式，直接出结果
 */
var isMatchWithReg = function(s, p) {
  const regString = '^' + p.replace(/\./g, '[\\S]') + '$';
  const reg = new RegExp(regString);
  return reg.test(s);
};
