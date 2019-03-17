/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const limited = Math.pow(2, 31);

  let str, result;
  if (x < 0) {
    str = (0 - x).toString();
    result = parseInt('-' + str.split('').reverse().join(''));
  } else { 
    result = parseInt(x.toString().split('').reverse().join(''));
  }

  if (result < (0 - limited) || result > (limited - 1)) {
    return 0;
  }
  return result;
};

reverse(1534236469);
