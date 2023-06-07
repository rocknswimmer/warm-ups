/*
In a quick overview of the problem, say we are given an input array, nums, of integers [1,3,4,2,2] inclusive, where n = length of the array. We are asked to find the duplicate value and return it in O(n), linear time, and with O(1) space complexity.

We have an example input of [1,3,4,2,2] and our expected output is 2 because 2 is the duplicate value in this array.

There are multiple ways to return the duplicate value, my initial approach would be to place the value in a hash map if it did not exist and then return that value if we ran across it again while we looped through the elements.

While this is in O(n) time complexity, we are using O(n) space complexity as we are creating a hash map to store the values.

So how would we solve it in O(1) space complexity if we were given the ability to mutate the array?



Answer:
In order to solve it without creating another data structure (which would cause O(n) space complexity) we'll utilize a cool concept I just learned called negation marking! Essentially, every time we visit an element in the array, we're going to mark the number as "negative" indicating that it has been "visited". If we run into that number again, it will already have been marked negative and thus we can return True, otherwise False.

The code here is how we could write it out:

def findDuplicate(array):
   for num in array:
absValue = abs(num)
if array[absValue-1] < 0:
return absValue
array[absValue-1] *= -1

array = [1,3,4,2,2]
output = 2

realize the solution has limited use cases, but wrapping the mind around concepts like these help keep it fluid enough to accept new situationally based unusual solutions.
*/