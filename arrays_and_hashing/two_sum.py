class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in nums[i+1:]: 
                return [i, nums.index(diff, i+1)]

solution = Solution()
print(solution.twoSum([3,2,4], 6))
