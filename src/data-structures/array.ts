class MyArray {
  public length: number;
  public data: Record<string, unknown>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: unknown): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }
}

export default MyArray;
