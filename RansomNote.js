/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  var ranCop = ransomNote.slice().split('');
  var magCop = magazine.slice().split('');

  while (ranCop.length > 0) {
      var index = magCop.indexOf(ranCop[0]);
      if ( index === -1){
          return false;
      }
      ranCop.shift()
      magCop.splice(index, 1);
  }
  return true;
};
