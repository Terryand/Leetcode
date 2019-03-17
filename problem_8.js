/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const int = parseInt(str);
  const result = (int !== int) ? 0 : int;
  const limited = Math.pow(2, 31);
  const limitedFloor = 0 - limited;
  const limitedCeil = limited - 1;
  if (result < limitedFloor) {
    return limitedFloor;
  } else if (result > limitedCeil) {
    return limitedCeil;
  }

  return result;
};