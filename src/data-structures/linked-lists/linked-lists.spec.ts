import { LinkedList, Node } from "./linked-lists";

describe("linked lists", () => {
  it("should initialize a ll with only one node with given value", () => {
    const value = 10;
    const ll = new LinkedList<number>(value);

    expect(ll.length).toBe(1);
    expect(ll.head).toEqual({ value, next: null });
    expect(ll.tail).toEqual({ value, next: null });
  });

  it("should append the new value to the tail of the ll", () => {
    const value1 = 10;
    const value2 = 5;
    const ll = new LinkedList<number>(value1);
    const updated_ll = ll.append(value2);

    expect(ll.length).toBe(2);
    expect(ll.head).toEqual({
      value: value1,
      next: {
        value: value2,
        next: null,
      },
    });
    expect(ll.tail).toEqual({ value: value2, next: null });
    expect(updated_ll).not.toEqual({ value: value1, next: null });
  });

  it("should prepend the new value to the tail of the ll", () => {
    const value1 = 5;
    const value2 = 10;
    const ll = new LinkedList<number>(value1);
    const updated_ll = ll.prepend(value2);

    expect(ll.length).toBe(2);
    expect(ll.head).toEqual({
      value: value2,
      next: {
        value: value1,
        next: null,
      },
    });
    expect(ll.tail).toEqual({ value: value1, next: null });
    expect(updated_ll).not.toEqual({ value: value1, next: null });
  });

  it("should print the ll", () => {
    const value1 = 5;
    const value2 = 16;
    const value3 = 1;
    const ll = new LinkedList<number>(value1);
    ll.append(value2);
    ll.append(value3);

    const printed_ll = ll.print();

    expect(printed_ll.length).toBe(3);
    expect(printed_ll).toEqual([value1, value2, value3]);
  });

  it("should insert a given value in a given index", () => {
    const value1 = 5;
    const value2 = 16;
    const value3 = 1;

    const index = 2;
    const value4 = 13;

    const ll = new LinkedList<number>(value1);
    ll.append(value2);
    ll.append(value3);
    ll.insert(index, value4);
    const printed_ll = ll.print();

    expect(ll.length).toBe(4);
    expect(printed_ll[index]).toBe(value4);
    expect(printed_ll).toEqual([value1, value2, value4, value3]);
  });

  it("should return the node of a given index", () => {
    const value1 = 5;
    const value2 = 16;
    const value3 = 1;
    const value4 = 13;
    const index = 2;

    const ll = new LinkedList<number>(value1);
    ll.append(value2);
    ll.append(value3);
    ll.append(value4);
    const node = ll.lookup(index);

    expect(node.value).toBe(value3);
  });
});

describe("linked lists' node", () => {
  it("should initialize an empty Node from given value", () => {
    const value = 10;
    const ll_node = new Node<number>(value);

    expect(ll_node).toEqual({ value, next: null });
  });
});
