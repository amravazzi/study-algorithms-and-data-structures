import { StackArray } from "./stacks-array";

describe("Stacks", () => {
  it("should initialize an empty stack", () => {
    const stack1 = new StackArray<number>();

    expect(stack1.data.length).toBe(0);
  });

  it("should push values to stack", () => {
    const stack1 = new StackArray<string>();
    const value = "google";

    stack1.push(value);

    expect(stack1.data.length).toBe(1);
    expect(stack1.data).toEqual([value]);
  });
});

describe("linked lists' node", () => {
  it("should initialize an empty Node from given value", () => {
    const value = 10;
    const ll_node = new Node<number>(value);

    expect(ll_node).toEqual({ value, next: null });
  });
});
