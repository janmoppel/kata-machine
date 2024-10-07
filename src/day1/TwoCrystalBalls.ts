// Need to jump a good distance to find the "safe" place faster (sqrt(N)). Sqrt N is better than N
// O(sqrt(N))
export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;
  for (; i < breaks.length; i += jump) {
    // 1. ball broke
    if (breaks[i]) {
      break;
    }
  }

  // Last safe place
  i -= jump;
  // Walk linearly to the break point
  for (let j = 0; j < jump && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}