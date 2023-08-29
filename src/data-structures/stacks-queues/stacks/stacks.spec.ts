import { Stack, Node } from "./stacks";

describe("Stacks", () => {
  it("should initialize an empty stack", () => {
    const stack1 = new Stack<number>();

    expect(stack1.length).toBe(0);
    expect(stack1.top).toBe(null);
    expect(stack1.bottom).toBe(null);
  });

  it("should push values to stack", () => {
    const stack1 = new Stack<string>();
    const value = "google";

    const res = stack1.push(value);

    expect(stack1.length).toBe(1);
    expect(stack1.top).toEqual({ value, next: null });
    expect(stack1.bottom).toEqual({ value, next: null });
  });
});

describe("linked lists' node", () => {
  it("should initialize an empty Node from given value", () => {
    const value = 10;
    const ll_node = new Node<number>(value);

    expect(ll_node).toEqual({ value, next: null });
  });
});
