type hash = number;
type tuple<T> = [key: string, value: T];
type bucket<T> = tuple<T>[];

class HashTable {
  private data: bucket<any>[] = [];

  constructor(size: number) {
    this.data = new Array(size);
  }

  private hash(key: string): hash {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key: string) {
    const address = this.hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) return bucket[i][1];
      }
    }

    return undefined;
  }

  set(key: string, value: any): void {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  keys(): tuple<any>[0][] {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }
}

export { HashTable };
