class Solution(object):
    def longestConsecutive(self, nums):
        if not nums:
            return 0

        s, best = set(nums), 0

        for v in s:
            if v - 1 not in s:
                curr = v
                loc = 1

                while curr + 1 in s:
                    curr += 1
                    loc += 1

                best = max(best, loc)

        return best
