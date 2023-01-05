/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if(prerequisites.length === 1 || prerequisites.length === 0){
      return true
  }
  if(prerequisites.every((pre, i) => {
      return prerequisites.every((rec, index) => {
          if (index === i){
              return true
          }
          if (rec[1] === pre[0]){
              if(rec[0] === pre[1]  || prerequisites.some((site) => { return site[0] === pre[1] && site[1] === rec[0]})){
                  return false
              }
              return true
          }
          if(pre[0] === pre[1]){
              return false
          }
          return true
      })
  })) {
      return true
  }
  return false
};