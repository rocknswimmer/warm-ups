var sortArrayByParity = function(nums) {
  var start = 0;
  var end = nums.length - 1;
  var popped;
  var results = [];

  while (start < end) {
      if(nums[start] % 2 === 0){
          results.unshift(nums[start])
      } else {
          results.push(nums[start])
      }
      if(nums[end] % 2 === 0){
          results.unshift(nums[end])
      } else {
          results.push(nums[end])
      }

      start++
      end--
  }
  if(start === end){
      if(nums[start] % 2 === 0){
          results.unshift(nums[start])
      } else {
          results.push(nums[start])
      }
  }
  return results
};