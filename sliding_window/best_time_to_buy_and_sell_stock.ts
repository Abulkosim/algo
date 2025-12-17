var maxProfit = function (prices) {
    let left = 0, right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right;
        }

        right++;
    }

    return maxProfit;
};
