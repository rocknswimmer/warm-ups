/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0];
  let curr = 0;
  for (let i = 0; i < nums.length; i++){
      curr = Math.max(nums[i], curr + nums[i]);
      sum = Math.max(sum, curr);
  }
  return sum
};