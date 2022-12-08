/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  var low = 0;
  var mid = Math.floor(nums.length / 2);
  var high = nums.length;
  var used = {};
  var temp;


  while (mid < nums.length && mid >= 0 && !used[temp]) {
      console.log(mid);
      used[mid] = true;
      if (nums[mid] === target) {
          return mid;
      }
      if (nums[mid] > target) {
          high = mid;
          temp = Math.floor((mid + low)/2);
          if (temp === mid) {
              mid--;
          } else {
              mid = temp;
          }

      } else {
          low = mid;
          temp = Math.floor((mid + high)/2);
          if (temp === mid) {
              mid++;
          } else {
              mid = temp;
          }
      }
  }
  return -1;
};