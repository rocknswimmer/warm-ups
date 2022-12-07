/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  var copyArr = s.slice().split('');
  for (let i = 0; i < t.length; i++){
      var index = copyArr.indexOf(t[i]);
      if (index === -1) {
          return false;
      }
      copyArr.splice(index, 1);
  }

  return true;

};