function minEatingSpeed(piles: number[], h: number): number {
  let low = 1, high = Math.max(...piles);
  let result = high;

  function canFinish(speed) {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / speed);
      if (hours > h) {
        return false;
      }
    }
    return hours <= h;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canFinish(mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
};