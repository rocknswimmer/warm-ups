var orangesRotting = function(grid) {
  var spread = true;
  var times = 0;
  var before = grid.map((arr) => {return arr.slice()})
  var after = grid.map((arr) => {return arr.slice()})

  while(spread){
      spread = false;
      times++
      after = before.map((arr) => {return arr.slice()})
      for(let i = 0; i < before.length; i++){
          for(let j = 0; j < before[0].length; j++){
              if(before[i][j] === 2){
                  if(after[i + 1] !== undefined && after[i + 1][j] === 1){
                  spread = true
                  after[i + 1][j] = 2
              }
              if(after[i - 1] !== undefined && after[i - 1][j] === 1){
                  spread = true
                  after[i - 1][j] = 2
              }
              if(after[i][j + 1] === 1){
                  spread = true
                  after[i][j + 1] = 2
              }
              if(after[i][j - 1] === 1){
                  spread = true
                  after[i][j - 1] = 2
              }
              }
          }

      }
      if(spread === false){
              times--
          }

      before = after.map((arr) => {return arr.slice()})
  }

  if(after.every((row) => {return row.indexOf(1) === -1})/*perform and every finding index of 1 for all arrays = -1*/ ){
      return times
  }
  return -1;
};