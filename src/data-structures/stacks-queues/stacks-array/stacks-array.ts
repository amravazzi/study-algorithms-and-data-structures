interface IStack<V> {
  data: Array<V>;
  peek(): V;
  push(value: V): IStack<V>;
  pop(): IStack<V> | null;
  isEmpty(): boolean;
}

class StackArray<V> implements IStack<V> {
  data: Array<V>;

  constructor() {
    this.data = [];
  }

  peek(): V {
    return this.data[this.data.length - 1];
  }

  push(value: V): IStack<V> {
    this.data.push(value);
    return this;
  }

  pop(): IStack<V> {
    this.data.pop();
    return this;
  }

  isEmpty(): boolean {
    return !!this.data.length;
  }
}

export { StackArray };
