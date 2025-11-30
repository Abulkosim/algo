function findMin(nums) {
    var l = 0;
    var r = nums.length - 1;
    var mid;
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return nums[l];
}
;
console.log(findMin([3, 4, 5, 1, 2]));
