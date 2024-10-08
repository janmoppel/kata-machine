// O(N^2)
export default function bubble_sort(arr: number[]): void {
  // At the end of each iteration -> the highest number is at the end
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        const value = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = value;
      }
    }
  }
}