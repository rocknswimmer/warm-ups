/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
   console.log(arguments)
   var firstBad = 1;
   while(!isBadVersion(firstBad)){
       firstBad += 5;
   }
   while(isBadVersion(firstBad - 1)){
       firstBad--;
   }
  return function(n) {
      return firstBad
  };
};