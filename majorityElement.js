/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  var maj;
  var counts = {};

  for (let i = 0; i < nums.length; i++) {
      if (counts[nums[i]] === undefined) {
          counts[nums[i]] = 1;
          if (maj === undefined) {
              maj = nums[i]
          }
      } else {
          counts[nums[i]]++;
          console.log(counts[nums[i]], maj)
          if (counts[nums[i]] > counts[maj]) {
              maj = nums[i];
          }
      }
  }

  console.log(counts)
  return maj;
};