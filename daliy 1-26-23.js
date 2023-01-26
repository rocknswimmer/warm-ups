/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length - 1; i++){
      if(matrix[i][0] <= target && matrix[i + 1][0] > target){
          let index = matrix[i].indexOf(target) // midpoint search for log time

          if (index !== -1){
              return true
          }
          return false
      }
  }

  let ind = matrix[matrix.length - 1].indexOf(target)
  if (ind !== -1){ //  midpoint search for log time
      return true
  }
  return false

};