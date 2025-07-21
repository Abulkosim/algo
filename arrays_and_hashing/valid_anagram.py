class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return ''.join(sorted(s)) == ''.join(sorted(t))

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_map, t_map = {}, {}
        
        for i in range(len(s)): 
            if s[i] not in s_map: 
                s_map[s[i]] = 1
            s_map[s[i]] += 1

        for j in range(len(t)): 
            if t[j] not in t_map: 
                t_map[t[j]] = 1
            t_map[t[j]] += 1

        return s_map == t_map