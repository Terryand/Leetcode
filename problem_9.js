/**
 * 9. Palindrome Number ( without converting the integer to a string )
 * @param {number} x
 * @return {boolean}
 */

/**
 * 为什么将数字直接翻转？因为可能会遇到数字溢出(M.A.X)的问题 
 */

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // 这是一个很好的将数字从中截断的方法。( x 不停地除 10 )
  let revertedNum = 0;
  while(x > revertedNum) {  // 这个 > 的真实含义其实是 多一位
    revertedNum = revertedNum * 10 + x % 10;
    // 这个 revertedNum 就是已经将 x 截下的位置翻转的数了
    x = parseInt(x / 10);
  }

  return (revertedNum - x < 1) || (revertedNum / 10 - x < 1 && revertedNum / 10 - x >= 0);
};

// 转成 string 会比较快
var isPalindromeByString = function(x) {
  // 个位数一定是
  if (x >= 0 && x < 10) {
    return true;
  }

  // 负数和10的倍数一定不是( 符号和 0 )
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  const arr = x.toString().split('');
  let i = 0, j = arr.length - 1;
  while(i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
};
