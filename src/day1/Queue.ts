type Node<T> = {
    value: T,
    next?: Node<T>
}

// FIFO - start from the head. Mono directional.
// Head -> Tail
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // Add to Queue
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // Remove from Queue
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        // Set the head to the next el
        const head = this.head;
        this.head = this.head.next;

        // free head
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        // Remember - first in first out!!
        return this.head?.value;
    }
}