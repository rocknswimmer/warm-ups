var subsets = function(nums) {
  var results = [[]]// since empty array needed in subset

  const subGenerator = (currentSub, ind) => {
      if (currentSub.length > 0){
          results.push(currentSub.slice())
      }
      if(currentSub.length === nums.length) {
          return
      }
      for (let i = ind; i < nums.length; i++) {
          currentSub.push(nums[i])
          subGenerator(currentSub, i + 1)
          currentSub.pop()
      }
  }

  subGenerator([], 0)
  return results
};
