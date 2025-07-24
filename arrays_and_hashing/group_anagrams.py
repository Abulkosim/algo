class Solution:
    def groupAnagrams(self, strs):
        hashmap = {}
        for str in strs: 
            sorted_str = ''.join(sorted(str))
            if sorted_str not in hashmap: 
              hashmap[sorted_str] = 1
            else: hashmap[sorted_str] += 1

        return hashmap

sol = Solution()

print(sol.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))