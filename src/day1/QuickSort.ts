
// [lo, hi]
function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  // Less than
  qs(arr, lo, pivotIdx - 1);

  // More than
  qs(arr, pivotIdx + 1, hi);
}

// [lo, hi)
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;

  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

// O(n*logN) best case
// O(N^2) - worst case (pivot is the lowest number)
export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length-1);
}