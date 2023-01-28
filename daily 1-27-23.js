var peakIndexInMountainArray = function(arr) {
  var low = 0
  var high = arr.length
  while(low < high){

      var mid = Math.floor((low+ high) / 2)
      // if(mid === 0){
      //     mid = 1
      // }
      // if (mid === arr.length - 1){
      //     mid = arr.length - 2
      // }
      console.log(low, high, mid)
      if(arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]){
          return mid
      }
      if(arr[mid - 1] > arr[mid]){
      //     if(mid === 0){
      //     return 'error'
      // }
          high = mid - 1
      } else {
      //     if (mid === arr.length - 1){
      //     return 'error'
      // }
          low = mid + 1
      }
  }

  if (arr[low] > arr[high]){
      return low
  }

  return high
};