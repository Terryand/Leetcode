/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const len = s.length,
        arr = s.split('');
        map = new Array(numRows),
        fullColIndex = (numRows - 1) > 0 ? (numRows - 1) : 1;
  
  // 坐标推进法，无法处理 numRows = 1 的特殊情况
  if (numRows === 1) {
    return s;
  }
  // 采用坐标法推进法，一次遍历整个字符串，然后锁定坐标，并且判断每一步应该前进的方向，将值插入
  let x = y = 0;
  for (let i = 0; i < len; i += 1) {
    if (!map[y]) map[y] = []; 

    map[y][x] = arr[i];

    if (x % fullColIndex === 0) {
      if (y < numRows - 1) {
        y += 1;
      } else {
        y = numRows - 2;
        x += 1;
      }
    } else {
      x += 1;
      y -= 1;
    }
  }

  const arrStr = map.map(item => item.join(''));
  return arrStr.join('');
};

convert("AB", 1);
