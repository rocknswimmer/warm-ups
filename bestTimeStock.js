/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(p) {
  var b = 0;
  var s;
  for (let i = 0; i < p.length; i++) {
      if (s === undefined || p[i] < s) {
          s = p[i]
      } else {
          b = Math.max(b, p[i] - s)
      }
  }
  return b;
};