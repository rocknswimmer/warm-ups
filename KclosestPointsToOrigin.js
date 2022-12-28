/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  var dists = {}
  var results = []
  for (let i = 0; i < points.length; i++){
      var dist = (((points[i][0]) ** 2) + ((points[i][1]) ** 2)) ** (1/2)
      if (dists[dist] === undefined) {
dists[dist] = [points[i]]
      } else {
          dists[dist].push(points[i])
      }

  }
  var keys = Object.keys(dists)
  keys.sort((a,b) => {
      if (Math.floor(a) < Math.floor(b)) {
          console.log('hit1', a, b, Math.floor(a) < Math.floor(b))
  return -1;
}
if (Math.floor(a) > Math.floor(b)) {
    console.log('hit2', a, b)
  return 1;
}
// a must be equal to b
if (a < b) {
    return -1;
}
if (a > b) {
    return 1
}
return 0;
  })
  console.log(keys, dists)
  for (let j = 0; j < k; j++){
      console.log(dists[keys[j]])
      if (dists[keys[j]].length === 1 ) {
          results.push(dists[keys[j]][0])
      } else {
          var len = dists[keys[j]].length
          var ind = j
          var count = 0
          for (let k = 0; k < len; k++) {
              results.push(dists[keys[ind]][k])
              count++;
          }
          j += count -1;
      }

  }
  return results
};