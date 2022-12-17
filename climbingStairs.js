/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  var array = [0, 1, 2];
for(var i = 3; i <= n; i++){
  array[i] = array[i - 1] + array[i - 2];
}
return array[n];
};