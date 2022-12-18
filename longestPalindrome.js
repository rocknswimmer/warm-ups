/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  var counts = {}
  var evens = 0
  var odds = 0
  for (let i = 0; i < s.length; i++){
      if (counts[s[i]] === undefined) {
          counts[s[i]] = 1;
      } else {
          counts[s[i]]++;
      }
  }
  console.log(counts)
  for (key in counts) {
      if (counts[key] % 2 === 0){
          evens += counts[key]
      } else {
          if ( counts[key] > 1) {
              evens += counts[key] - 1
              odds++
          } else {
              odds++
          }
      }
  }
  console.log(odds)
  if ( odds > 0) {
      console.log('hit', evens)
      return evens + 1
  }
  return evens
};