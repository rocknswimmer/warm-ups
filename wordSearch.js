var exist = function(board, word) {
  var copy = board.map((row) => {
      return row.slice()
  })
  var max = word.length - 1;

  var letterChecker = (grid, targetInd, maxInd, currLoaction) => {
      if(tagetInd > maxInd){// 1 letter word edge case probs gonna mess this up.
          return false
      }
      target = word[targetInd]
      if(targetInd === 0){
          if(grid[currLocation[0]][currLocation[1]] === target){
              grid[currLocation[0]][currLocation[1]] = 0
              letterChecker(grid, targetInd++, maxInd, currLocation)
          }
      }


  }

  return letterChecker(copy, 0, max, [0,0])
};