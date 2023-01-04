/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var copy = tokens.slice();
  var ops = ['+', '-', '*', '/']
  //find an oporator splice 3 at that index - 2 performing operation on values
  for (let i = 0; i < copy.length; i++){
      if(ops.indexOf(copy[i]) !== -1){
          var result = op(Number(copy[i - 2]), Number(copy[i - 1]), copy[i])
          copy.splice(i - 2, 3, result);
          i = i - 3;
      }
  }
  return copy[0];
};

var op = (num1, num2, oper) => {
  // console.log(num1, num2, oper)
  if (oper === '+'){
      return num1 + num2
  }
  if (oper === '-'){
      return num1 - num2
  }
  if (oper === '*'){
      return num1 * num2
  }
  if (oper === '/'){
      if (num1 / num2 > 0) {
        return Math.floor(num1 / num2)
      } else {
          return Math.ceil(num1 / num2)
      }

  }
  console.log('error', num1, num2, oper)
}