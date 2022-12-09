/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
  var currColor = image[sr][sc];
  if (currColor === color) {
      return image;
  }

  var adjChecker = (row, col) => {
      if (row < 0 || col < 0 || row >= image.length || col >= image[0].length){
          return;
      }
      if (image[row][col] === currColor) {
          console.log(row,col, image[row][col], currColor, color)
          image[row][col] = color;

          adjChecker(row, col - 1)
          adjChecker(row + 1, col)
          adjChecker(row, col + 1)
          adjChecker(row - 1, col)
      }
  }

  adjChecker(sr, sc);
  return image;
};