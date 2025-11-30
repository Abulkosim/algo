function search(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    var mid;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
    }
    return -1;
}
;
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
