function longestConsecutive(nums) {
  let localLongest = 1;
  let globalLongest = 1;
  let numsSet = new Set(nums.sort((a, b) => a - b));
  nums = [...numsSet];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      localLongest++;
    } else {
      globalLongest = Math.max(localLongest, globalLongest);
      localLongest = 1;
    }
  }
  return Math.max(localLongest, globalLongest)
};

console.log(longestConsecutive([1,0,1,2]))