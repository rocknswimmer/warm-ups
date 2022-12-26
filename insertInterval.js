/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  var nStart = newInterval[0];
  var nEnd = newInterval[1];
  var unCaughtStart = -1;
  var unCaughtEnd = -1;
  var caughtInt = -1;
  var caughtStart = -1;
  var caughtEnd = -1;

  if (intervals.length === 0) {
      return [newInterval];
  }

  for (let i = 0; i < intervals.length; i++) {
      var intV = intervals[i];
      if (intV[1] < nStart){
          console.log('hit')
          unCaughtStart = i;
      }
      if (nStart < intV[0] && nEnd > intV[1]){
          caughtInt = i;
      }
      if (intV[0] <= nStart && intV[1] >= nStart){
          caughtStart = i;
      }
      if (intV[0] <= nEnd && intV[1] >= nEnd){
          caughtEnd = i;
      }
      if ((intV[0] >= nEnd || intV[1] >= nEnd) && unCaughtEnd === -1 ){
          unCaughtEnd = i;
      }
  }
  console.log(caughtStart, caughtEnd, unCaughtStart, caughtInt, unCaughtEnd)

  if (caughtStart > -1 && caughtEnd > -1) {
      console.log('hit 1')
      if (caughtStart === caughtEnd) {
          return intervals
      }
          var tempStart = intervals[caughtStart][0];
          var tempEnd = intervals[caughtEnd][1];
          intervals.splice(caughtStart, caughtEnd - caughtStart + 1, [tempStart, tempEnd] )

  }

  if (caughtStart === -1 && caughtEnd === -1) {
      console.log('hit 2')
      console.log(unCaughtStart, caughtInt)
      if (nStart < intervals[0][0] && nEnd > intervals[intervals.length - 1][1]){
          return [newInterval];
      }
      if (caughtInt > -1){
          intervals[caughtInt] = newInterval
          return intervals;
      }

      if (unCaughtStart === -1){
          if (caughtInt > -1) {
              intervals[caughtInt] = newInterval
          } else {
intervals.unshift(newInterval)
          }

      } else {
          intervals.splice(unCaughtStart + 1, 0, newInterval)
      }
  }
  if (caughtStart > -1 && caughtEnd === -1){
      console.log('hit 3')
      if (unCaughtEnd === -1) {

          var tempStart = intervals[caughtStart][0];
          console.log(intervals.splice(caughtStart, intervals.length - caughtStart, [tempStart, newInterval[1]]), newInterval, tempStart, intervals.length - caughtStart, caughtStart)
           intervals.splice(caughtStart, intervals.length - caughtStart, [tempStart, newInterval[1]])
           return intervals;
      }

      if (unCaughtEnd > -1){
          var tempStart = intervals[caughtStart][0];
          console.log('now what', unCaughtEnd, caughtStart)
          intervals.splice(caughtStart, unCaughtEnd - caughtStart, [tempStart, newInterval[1]])
      }
      intervals[caughtStart][1] = newInterval[1];

  }

  if (caughtEnd > -1 && caughtStart === -1) {
      if (unCaughtStart > -1){
          tempEnd = intervals[caughtEnd][1];
          intervals.splice(unCaughtStart + 1, caughtEnd - unCaughtStart, [newInterval[0], tempEnd])
          return intervals
      }
      console.log('hit')
          intervals[caughtEnd][0] = newInterval[0];
  }

  return intervals;
};