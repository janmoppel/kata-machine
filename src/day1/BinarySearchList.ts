// Prereq - ordered array
// O(log N)
export default function bs_list(haystack: number[], needle: number): boolean {
  // [lo, hi) cause high point is always excluded
  let lowIndex = 0;
  let highIndex = haystack.length;

  while (lowIndex < highIndex) {
    // To avoid overflow
    const middleIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    const value = haystack[middleIndex];

    if (needle === value) {
      return true;
    } else if (needle > value) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex;
    }
  }
  return false;
}