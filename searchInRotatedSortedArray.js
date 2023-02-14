var search = function (nums, target) {
  var rotated = nums[0] > nums[nums.length - 1]
  var low = 0
  var high = nums.length - 1
  var mid = Math.floor(high / 2)

  while (low < high) {
    if (rotated) {
      if (nums[mid] === target) {
        return mid
      }
      if (nums[mid] < target) {
        if (nums[mid] > nums[nums.length - 1]) {
          low = mid + 1
          mid = Math.floor((low + high) / 2)
        } else {
          high = mid - 1
          mid = Math.floor((high + low) / 2)
        }
      } else {
        if (nums[mid] > nums[nums.length - 1]) {
          low = mid + 1
          mid = Math.floor((low + high) / 2)
        } else {
          high = mid - 1
          mid = Math.floor((high + low) / 2)
        }

      }
    } else {
      if (nums[mid] === target) {
        return mid
      }
      if (nums[mid] < target) {
        low = mid + 1
        mid = Math.floor((low + high) / 2)
      } else {
        high = mid - 1
        mid = Math.floor((high + low) / 2)
      }
    }
  }

  if (nums[mid] === target) {
    return mid
  }
  if (nums[0] === target){
      return 0
  }
  return -1;
};