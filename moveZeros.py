class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        start = 0
        stop = len(nums)
        while start < stop:
            if(nums[start] == 0 and start < stop - 1):
                #print(start, stop, nums)
                zeros = 1
                while start < stop - 1 and nums[start + 1] == 0 :
                    zeros += 1
                    del nums[start]
                    stop -= 1
                if start != stop -1:
                    nums[start] = nums[start + 1]
                    nums[start + 1] = 0
                while zeros > 1:
                    nums.append(0)
                    zeros -= 1
            start += 1