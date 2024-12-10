import { BinarySearchTree } from "./bst";

describe("Binary Search Tree", () => {
  it("should be initialized with null root", () => {
    const bst = new BinarySearchTree();
    expect(bst.root).toBeNull();
  });

  it("should be able to insert a number", () => {
    const bst = new BinarySearchTree();
    const value = 1;
    const resValue = bst.insert(value);
    const found = bst.lookup(value)
    expect(found).toBe(value);
  });

  it("should lookup for a value", () => {
    const bst = new BinarySearchTree();
    const values = [...Array(40)].map(() => ~~(Math.random() * 40));
    values.map((val) => bst.insert(val));
    expect(bst.lookup(values[3])).toBe(values[3]);
  });
});
