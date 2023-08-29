type NodeValue<V> = V;

interface INode<V> {
  value: NodeValue<V>;
  next: INode<V> | null;
}

type IStackNode<V> = INode<V> | null;

interface IStack<V> {
  top: INode<V> | null;
  bottom: INode<V> | null;
  length: number;
  peek(): IStackNode<V>;
  push(value: V): IStack<V>;
  pop(): IStack<V> | null;
  isEmpty(): boolean;
}

class Stack<V> implements IStack<V> {
  top: IStackNode<V>;
  bottom: IStackNode<V>;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(): IStackNode<V> {
    return this.top;
  }

  push(value: V): IStack<V> {
    const newTop = new Node<V>(value);
    if (this.length === 0) {
      this.top = newTop;
      this.bottom = newTop;
    } else {
      const top = this.top;
      newTop.next = top;
      this.top = newTop;
    }
    this.length++;

    return this;
  }

  pop(): IStack<V> | null {
    if (!this.top) return null;
    if (this.length === 0) this.bottom = null;
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;

    return this;
  }

  isEmpty(): boolean {
    return !!this.length;
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

export { Stack, Node };
