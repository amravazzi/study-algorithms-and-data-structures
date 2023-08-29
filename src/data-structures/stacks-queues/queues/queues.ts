type NodeValue<V> = V;

interface INode<V> {
  value: NodeValue<V>;
  next: INode<V> | null;
}

type IQueueNode<V> = INode<V> | null;

interface IQueue<V> {
  first: INode<V> | null;
  last: INode<V> | null;
  length: number;
  peek(): IQueueNode<V>;
  enqueue(value: V): IQueue<V>;
  dequeue(): IQueue<V> | null;
  isEmpty(): boolean;
}

class Queue<V> implements IQueue<V> {
  first: IQueueNode<V>;
  last: IQueueNode<V>;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(): IQueueNode<V> {
    return this.first;
  }

  enqueue(value: V): IQueue<V> {
    const newTop = new Node<V>(value);
    if (this.length === 0) {
      this.first = newTop;
      this.last = newTop;
    } else {
      const first = this.first;
      newTop.next = first;
      this.first = newTop;
    }
    this.length++;

    return this;
  }

  // removes from the top of the list
  dequeue(): IQueue<V> | null {
    if (!this.first) return this;
    const newTop = this.first.next;
    this.first = newTop;
    this.length--;
    if (this.length === 0) this.last = newTop;

    return this;
  }

  isEmpty(): boolean {
    return !!!this.length;
  }
}

class Node<V> implements INode<V> {
  value: V;
  next: INode<V> | null;

  constructor(value: V) {
    this.value = value;
    this.next = null;
  }
}

export { Queue, Node };
