function isPalindrome(s: string): boolean {
  if (!s.trim().length) return true;

  let filteredStr = s.split('')
    .filter(char => /[a-zA-Z0-9]/.test(char))
    .join('')
    .toLowerCase();

  return filteredStr === filteredStr.split('').reverse().join('');
};
