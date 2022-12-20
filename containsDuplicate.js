/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      var num = nums[i]
   if (nums.slice(i + 1).indexOf(num) !== -1){
       return true;
   }
}
return false
};