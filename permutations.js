var permute = function(nums) {

  var results = []
  var len = nums.length

  var resultMaker = (curr) => {
      if(curr.length === len){
          results.push(curr.slice())
          return
      }
      for(let i = 0; i < len; i++){
          if(curr.indexOf(nums[i]) === -1){
              curr.push(nums[i])
              resultMaker(curr, len)
              curr.pop()
          }

      }
  }

  resultMaker([])

  return results
};