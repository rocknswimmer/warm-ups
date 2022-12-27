// /**
//  * @param {number[][]} mat
//  * @return {number[][]}
//  */
// var updateMatrix = function(mat) {
//   var results = mat.map(() => {
//       return [];
//   })
//   for (let i = 0; i < mat.length; i++){
//       for (let j = 0; j < mat[0].length; j++) {
//           results[i].push(closest(i, j, mat, 0))
//       }
//   }
//   return results
// };

// var closest = (x, y, mat, times, visited) => {
//   console.log(x,y, times)
//   var dir = [];
//   visited = visited || mat.map((el) => {return Array(el.length).fill(false) })
//   if (x < 0 || x >= mat.length || y < 0 || y >= mat[0].length){
//       return -1;
//   }
//   if (mat[x][y] === 0) {
//       console.log('hit', times)
//       return times;
//   }
//   if (visited[x][y] === false) {
//       visited[x][y] = true
// left = closest(x - 1, y, mat, times + 1, visited)
//   if (left >= 0){
//       dir.push(left)
//   }
//   right = closest(x + 1, y, mat, times + 1, visited)
//   if (right >= 0) {
//       dir.push(right)
//   }
//   up = closest(x, y - 1, mat, times + 1, visited)
//   if (up >= 0) {
//       dir.push(up)
//   }
//   down = closest(x, y + 1, mat, times + 1, visited)
//   if (down >= 0){
//       dir.push(down)
//   }

//   }
//   console.log(dir, 'dir')
//   return Math.min(...dir)

// }

//above og brute forcy needs work below worked through provided solution

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  var results = mat.map((el) => {
      return new Array(el.length).fill(Number.MAX_SAFE_INTEGER - 10);
  })

  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++){
          if (mat[i][j] === 0){
              results[i][j] = 0;
          } else {
              if (i > 0) {
                  results[i][j] = Math.min(results[i][j], results[i - 1][j] + 1)
              }
              if (j > 0) {
                  results[i][j] = Math.min(results[i][j], results[i][j - 1] + 1)
              }
          }
      }
  }

  for (let x = mat.length - 1; x >= 0; x--){
      for (let y = mat[0].length - 1; y >= 0; y--){
          if (mat[x][y] === 0){
              results[x][y] = 0;
          } else {
              if (x < mat.length - 1) {
                  results[x][y] = Math.min(results[x][y], results[x + 1][y] + 1)
              }
              if (y < mat[0].length - 1) {
                  results[x][y] = Math.min(results[x][y], results[x][y + 1] + 1)
              }
          }
      }
  }
  return results
};