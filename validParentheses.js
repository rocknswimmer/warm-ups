/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  var open = ['(', '{', '['];
  var closed =  [')', '}', ']'];
  var openings = [];

  for (let i = 0; i < s.length; i++) {
      if (i === 0 && open.indexOf(s[0]) === -1){
          return false;
      }
      if (open.indexOf(s[i]) === -1) {
          if (closed.indexOf(s[i]) === open.indexOf(openings[openings.length - 1])) {
              openings.pop();
          } else {
              return false;
          }
      } else {
          openings.push(s[i]);
      }
  }

  if (openings.length === 0) {
      return true;
  }

  return false;



};