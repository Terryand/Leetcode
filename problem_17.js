/**
 * 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 * 
 * 回溯法
 */

// DFS 深度优先搜索
function letterCombinations(digits) {
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  },
    result = [],
    len = digits.length,
    arr = digits.split('');
  
  if (len > 0) {
    dfs(0, '');
  }
  return result;

  function dfs(deepth, prefix) {
    if (deepth === len) {
      result.push(prefix);
    } else {
      const chars = map[arr[deepth]];
      for (let i = 0; i < chars.length; i += 1) {
        dfs(deepth + 1, prefix + chars[i]);
      }
    }
  }
}

console.log(letterCombinations(process.argv[2]));

// BFS 广度优先搜索
var letterCombinationsBFS = function(digits) {
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const arr = digits.split(''),
        len = digits.length;

  let result = [];
  for (let i = 0; i < len; i += 1) {
    if (result.length === 0) {
      result = map[arr[i]].map(item => item);
    } else {
      const tmp = [];
      for (let j = 0; j < result.length; j += 1) {
        for (let k = 0; k < map[arr[i]].length; k += 1) {
          tmp.push(result[j] + map[arr[i]][k]);
        }
      }
      result = tmp;
    }
  }

  return result;
};
