type hash = number
type bucket = [string, hash];

class HashTable {
  private data: bucket[];

  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: any) {
    let hash = 0;
    for (let i = 0; i < key.lenght; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
  }
}

export { HashTable };
