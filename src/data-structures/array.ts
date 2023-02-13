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

  delete(index: number) {
    const item = this.data[index];
    this.shiftItemsFrom(index);
    return item;
  }

  private shiftItemsFrom(index: number): void {
    const lastItem = this.length - 1;
    for (let i = index; i < lastItem; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[lastItem];
    this.length--;
  }
}

export default MyArray;
