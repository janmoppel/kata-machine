export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    // O(logN)
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    // O(logN)
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const v = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return v;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return v;
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (leftIdx >= this.length || rightIdx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        // Get the minimal child and switch
        if (rightValue > leftValue && value > leftValue) {
            this.data[leftIdx] = value;
            this.data[idx] = leftValue;
            this.heapifyDown(leftIdx);
        } else if (leftValue > rightValue && value > rightValue) {
            this.data[rightIdx] = value;
            this.data[idx] = rightValue;
            this.heapifyDown(rightIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];

        if (parentValue > value) {
            this.data[parentIdx] = value;
            this.data[idx] = parentValue;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}