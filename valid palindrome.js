/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;


  while(i < s.length && j >= 0) {
      if (i === j) {

              return true;
          }
      if (i + 1 === j && (s[i].toUpperCase() === s[j].toUpperCase())) {
          return true;
      }


      if (i > j ) {

                  return false;
              }

          while(alp.indexOf(s[i].toUpperCase()) === -1) {
              i++;
              if (i > j ) {

                  let copy = s.slice();
  let arr = copy.split('');
  let noLets = arr.map((letter) => {
      return alp.indexOf(letter);
  }).every((ind) => {
      return ind === -1;
  })
  return noLets;
              }
          }
         while(alp.indexOf(s[j].toUpperCase()) === -1) {
              j--;
              if (i > j ) {

                  return false;
              }
          }
          if(s[i].toUpperCase() !== s[j].toUpperCase()) {

              return false;
          }


      i++;
      j--;
      }


  return true;
};

var alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];