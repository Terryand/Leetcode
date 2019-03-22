/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 * 
 * 标准堆栈实现
 * 不匹配的 左括号 入栈，匹配的 右括号 出栈，最后栈为空即合法
 * 如果右括号没有匹配栈顶的括号，直接报错结束
 */
var isValid = function(s) {
  const arr = [],
        chars = s.split(''),
        left = ['(', '[', '{'],
        right = [')', ']', '}'];
  const len = chars.length;

  for (let i = 0; i < len; i += 1) {
    const leftIndex = left.indexOf(chars[i]);
    const rightIndex = right.indexOf(chars[i]);

    if (leftIndex < 0 && (arr.length === 0 || arr[arr.length - 1] !== rightIndex)) {
      return false;
    } else if (leftIndex < 0) {
      arr.pop();
    } else {
      arr.push(leftIndex);
    }
  }

  return arr.length === 0;
};