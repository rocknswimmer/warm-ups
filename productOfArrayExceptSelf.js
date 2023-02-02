var productExceptSelf = function(nums) {
  var product = 1;
  var zeros = 0;
  nums.forEach((num) => {
      if (num !== 0){
          product = product * num
      } else {
          zeros++
      }
  })
  var results = nums.map((number) => {
      if (number === 0) {
          if (zeros > 1) {
              return 0;
          } else {
              return product
          }
      } else {
          if (zeros > 0) {
              return 0
          }
          return product / number;
      }
  })
  return results;
};