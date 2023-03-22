import { HashTable } from "./hash-table";

describe("hash table", () => {
  it("should set a key and a value in the hash table", () => {
    const key = "apple";
    const value = 50;

    const ht = new HashTable(20);
    ht.set(key, value);

    const hash = 4;
    const tuple = ht["data"][hash];

    expect(tuple[0][0]).toBe(key);
    expect(tuple[0][1]).toBe(value);
  });

  it("should get a value from the hash table, given a key as argument", () => {
    const key = "apple";
    const value = 50;

    const ht = new HashTable(20);
    ht.set(key, value);
    const returned_value = ht.get(key);

    expect(returned_value).toBe(value);
  });

  it("should hash a key idepontently", () => {
    const key = "test_test_123";
    const expected_hashed_hey = 5;

    const ht = new HashTable(20);
    const hashed_key_1 = ht["hash"](key);
    const hashed_key_2 = ht["hash"](key);
    const hashed_key_3 = ht["hash"](key);

    expect(hashed_key_1).toBe(expected_hashed_hey);
    expect(hashed_key_2).toBe(expected_hashed_hey);
    expect(hashed_key_3).toBe(expected_hashed_hey);
  });

  it("should return all the hash table keys", () => {
    const ht = new HashTable(20);
    ht.set("grapes", 14);
    ht.set("apple", 25);
    ht.set("oranges", 16);
    ht.set("banana", 13);

    const keys = ht.keys();

    expect(keys).toHaveLength(4);
    expect(keys).toEqual(["grapes", "apple", "oranges", "banana"]);
  });
});
