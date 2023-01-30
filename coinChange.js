var coinChange = function(coins, amount) {
  coins.sort((a,b) => {
      if(a < b){
          return -1
      }
      if(a > b){
          return 1
      }
      return 0
  })
  var coinCount = 0;
  var total = 0;
  var coinIndex = coins.length - 1;
  var amountLeft = amount;

  while (total < amount){
      if(coins[coinIndex] <= amountLeft){
          total = total + coins[coinIndex]
          coinCount++
          amountLeft = amountLeft - coins[coinIndex]
      } else {
          while(coinIndex >= 0 && coins[coinIndex] > amountLeft){
              coinIndex--;
          }
          if(coinIndex === -1){
              return coinIndex
          }
      }

  }
return coinCount
};