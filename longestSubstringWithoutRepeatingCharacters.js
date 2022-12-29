/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0 || s.length === 1){
      return s.length;
  }
  var sub = s[0];
  var longest = 1;

  for (let i = 1; i < s.length; i++) {
      var index = sub.indexOf(s[i]);
      if (index === -1) {
          sub = sub + s[i];
      } else {
          sub = sub.slice(index + 1) + s[i];
      }
      longest = Math.max(longest, sub.length)
  }
  return longest
};

// just passed k closest points by deleting console logs. console.logs can exceed output limit