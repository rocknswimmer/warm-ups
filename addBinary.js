/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var aarray = a.split('');
  var barray = b.split('');
  var timesThrough = 0;
  var temp;

  if (barray.length > aarray.length) {
      temp = barray;
      barray = aarray;
      aarray = temp;
  }

  for (let i = barray.length - 1; i >= 0; i--) {
      timesThrough++;
      if (barray[i] === '1'){
          var index = aarray.length - timesThrough;
          if (aarray[index] === '0'){
                      aarray[index] = '1';
                  } else {
                      aarray[index] = '2';
                  }
          console.log('hit1', index, aarray)
          while(aarray[index] === '2') {
              if (index > 0) {
                  aarray[index] = '0';
                  index--
                  if (aarray[index] === '0'){
                      aarray[index] = '1';
                  } else {
                      aarray[index] = '2';
                  }
              } else {
                  aarray[index] = '0';
                  aarray.unshift('1');
              }
          }
      } else {
          console.log(barray[i], aarray)
      }
  }
  return aarray.join('');
};