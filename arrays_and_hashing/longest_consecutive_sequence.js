function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums);
  let globalLongest = 0;

  for (const v of set) {
    if (!set.has(v - 1)) {
      let x = v; 
      let len = 1;

      while (set.has(x + 1)) {
        x++;
        len++;
      }

      if (len > globalLongest) globalLongest = len;
    }
  }

  return globalLongest
};