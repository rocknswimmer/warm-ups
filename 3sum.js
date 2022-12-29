/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  var results = []
  nums = nums.sort((a,b) => {
      if(a<b){
          return -1
      }
      if (a>b){
          return 1
      }
      return 0
  });
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      if (i === 0 || nums[i - 1] !== nums[i]){
          console.log('hit', i)
          twoSums(nums, i, results)
      }
  }
  return results;
};

var twoSums = (nums, i, res) => {
  let lo = i + 1
  let hi = nums.length - 1;
      while (lo < hi) {
          // console.log(lo, hi)
           sum = nums[i] + nums[lo] + nums[hi];
          if (sum < 0) {
              // console.log('hit 1')
              lo++;
          } else if (sum > 0) {
              // console.log('hit 2')
              hi--;
          } else {
              // console.log('hit 3')
              res.push([nums[i], nums[lo], nums[hi]]);
              lo++
              hi--
              while (lo < hi && nums[lo] === nums[lo - 1]){
                  lo++;
              }

          }
      }
  }