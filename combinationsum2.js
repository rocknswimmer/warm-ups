var combinationSum = function(candidates, target) {
  // lets see if we can remember rps
  var results = []

  const resGenerator = (currTotal, currCombo, ind) => {
      if (currTotal > target){

              return
          }
          if (currTotal === target){

              results.push(currCombo.slice())

              return
          }
      for (let i = ind; i < candidates.length; i++){

          currCombo.push(candidates[i])


          resGenerator(currTotal + candidates[i], currCombo, i)
          currCombo.pop()

      }

  }

  resGenerator(0, [], 0)
  return results
};