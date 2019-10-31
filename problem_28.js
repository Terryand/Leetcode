/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * KMP 算法
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  if (!haystack || haystack.length < needle.length) {
    return -1;
  }
  const h = haystack.split('');
  const n = needle.split('');

  const maxI = h.length - n.length + 1;
  for (let i = 0; i < maxI; i += 1) {
    for (let j = 0; j < n.length; j += 1) {
      if (h[i + j] !== n[j]) {
        break;
      }
      if (j === n.length - 1 && h[i + j] === n[j]) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr('a', 'a'));
