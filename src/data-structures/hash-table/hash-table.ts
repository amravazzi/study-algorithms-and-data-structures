type hash = number;
type bucket = [string, hash];

class HashTable {
  private data: bucket[];

  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key: string) {}

  set(key: string, value: any) {}
}

export { HashTable };
