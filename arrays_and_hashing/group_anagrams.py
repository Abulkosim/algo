class Solution:
    def groupAnagrams(self, strs):
        hashmap = {}
        for str in strs: 
            sorted_str = ''.join(sorted(str))
            if sorted_str not in hashmap: 
              hashmap[sorted_str] = [str]
            else: hashmap[sorted_str].append(str)

        return list(hashmap.values())

sol = Solution()

print(sol.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
# [["bat"],["nat","tan"],["ate","eat","tea"]]