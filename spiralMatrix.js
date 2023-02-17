var spiralOrder = function(matrix) {
  var times = 0;
  var turns = 1;
  var direction = 'right';
  var x = 0;
  var y = 0;
  var xMax = matrix[0].length - 1;
  var yMax = matrix.length - 1;
  var results = []

  while(times < ((xMax + 1) * (yMax + 1))){
      // console.log(y,x, results, turns, times, direction,((xMax + 1) * (yMax + 1)))
      times++
      results.push(matrix[y][x])
      if(direction === 'right'){
          // console.log(direction)
          if(x + 1 <= xMax - (Math.floor(turns/4))){
              // console.log('hit1')
              x++;
          } else {
              // console.log('hit2')
              turns++
              direction = 'down'
              y++;
          }
          continue
      }
      if(direction === 'down'){
          // console.log(direction)
          if(y + 1 <= yMax - (Math.floor(turns/4))){
              // console.log('hit1')
              y++;
          } else {
              // console.log('hit2')
              turns++
              direction = 'left'
              x--;
          }
          continue
      }
      if(direction === 'left'){
          // console.log(direction, x, Math.floor(turns/4))
          if( x - 1 >= 0 + (Math.floor(turns/4))){
              // console.log('hit1')
              x--;
          } else {
              // console.log('hit2')
              turns++
              direction = 'up'
             y--;
          }
          continue
      }
      if(direction === 'up'){
          // console.log(direction, y, )
          if(y -1 >= 0 + (Math.floor(turns/4))){
              // console.log('hit1')
              y--;
          } else {
              // console.log('hit2')
              turns++
              direction = 'right'
             x++;
          }
          continue
      }

  }
  return results
};