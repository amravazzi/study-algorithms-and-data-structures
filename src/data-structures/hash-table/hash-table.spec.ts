import { HashTable } from "./hash-table";

describe("hash table", () => {
  it.todo("should set a key and a value in the hash table");
  it.todo("should get a value from the hash table, given a key as argument");
  it("should hash a key idepontently", () => {
    const key = "test_test_123";
    const expected_hashed_hey = 5;

    const ht = new HashTable(20);
    const hashed_key_1 = ht._hash(key);
    const hashed_key_2 = ht._hash(key);
    const hashed_key_3 = ht._hash(key);

    expect(hashed_key_1).toBe(expected_hashed_hey);
    expect(hashed_key_2).toBe(expected_hashed_hey);
    expect(hashed_key_3).toBe(expected_hashed_hey);
  });
});
