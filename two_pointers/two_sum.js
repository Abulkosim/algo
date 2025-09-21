function twoSum(numbers, target) {
    let hash = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        let curr = numbers[i]

        if (hash.has(curr)) {
            return [hash.get(curr), i + 1]
        } else {
            hash.set(diff, i + 1)
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
