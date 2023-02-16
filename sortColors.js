var sortColors = function(nums) {
  var popped;

  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0){
          popped = nums.splice(i, 1)
          nums.unshift(popped[0])
          continue
      }
      if(nums[i] === 2){
          while((nums[i + 1] === 2 && (nums.slice(i).indexOf(1) !== -1 || nums.slice(i).indexOf(0) !== -1)) || nums[i + 1] === 0){

                 if(nums[i + 1] === 2 ) {popped = nums.splice(i + 1, 1)

          nums.push(popped[0])}

          if(nums[i + 1] === 0){
              popped = nums.splice(i + 1, 1)

          nums.unshift(popped[0])
          i++
          }
          }

          popped = nums.splice(i, 1)

          nums.push(popped[0])

      }
  }


};