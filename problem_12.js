/**
 * 12. Integer to Roman
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const Mparts = ['', 'M', 'MM', 'MMM'],
        Cparts = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        Xparts = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        Iparts = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return Mparts[Math.floor(num / 1000)] + Cparts[Math.floor((num % 1000) / 100)] + Xparts[Math.floor((num % 100) / 10)] + Iparts[Math.floor(num % 10)];
};
