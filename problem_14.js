/**
 * 14. Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */

/**
 * 二分法查找
 */
var longestCommonPrefix = function(strs) {
  const strsLen = strs.length;
  if (!strs || strsLen <= 0) return '';

  // ... to be continued 
}
 
/**
 * 水平扫描，每次拿最长的公共前缀子串和数组后面的下一个成员比较，得到新的最长公共前缀子串。
 * 这个方法的劣势在于：1、需要 m * n 次循环遍历；2、需要额外的 m 空间保存公共前缀子串
 */
var longestCommonPrefixByScan = function(strs) {
  const common2Prefix = function(str1, str2) {
    const len1 = str1.length, len2 = str2.length;
    let long, short, shortLen;
    if (len1 > len2) {
      long = str1;
      short = str2;
      shortLen = len2;
    } else {
      long = str2;
      short = str1;
      shortLen = len1;
    }

    let i = 0;
    for (i; i < shortLen; i += 1) {
      if (short.charAt(i) !== long.charAt(i)) {
        break;
      }
    }
    return short.slice(0, i);
  }

  const strsLen = strs.length;
  let result = strs[0] || '';
  for (let i = 1; i < strsLen; i += 1) {
    result = common2Prefix(result, strs[i]);
  }

  return result;
};
