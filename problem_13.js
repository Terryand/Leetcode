/**
 * 13. Roman to Integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const cardinalMap = {
    I: 0,
    V: 1,
    X: 2,
    L: 3,
    C: 4,
    D: 5,
    M: 6,
  },
      cardinals = [1, 5, 10, 50, 100, 500, 1000],
      len = s.length;

  let sum = 0;
  for (let i = len - 1; i >= 0; i -= 1) {
    const char = s.charAt(i);
    if (i === (len - 1) || cardinalMap[char] >= cardinalMap[s.charAt(i + 1)]) {
      sum += cardinals[cardinalMap[char]];
    } else {
      sum -= cardinals[cardinalMap[char]];
    }
  }

  return sum;
};

console.log(romanToInt(process.argv[2]));
