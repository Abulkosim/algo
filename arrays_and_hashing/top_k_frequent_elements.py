class Solution:
    def topKFrequent(self, nums, k): 
      hash = {}
      for num in nums:
        if num in hash:
          hash[num] += 1
        else: hash[num] = 1
      sorted_hash = sorted(hash.items(), key = lambda k: k[1], reverse=True)
      return [item[0] for item in sorted_hash[:k]]
        
sol = Solution()
print(sol.topKFrequent([2,2,1,1,1,1,3], 2))