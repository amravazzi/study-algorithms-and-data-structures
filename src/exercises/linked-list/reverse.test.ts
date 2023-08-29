import { LinkedList, Node } from "./reverse";

describe("reverse linked list", () => {
  it("should reverse the given linked list", () => {
    const value1 = 5;
    const value2 = 16;
    const value3 = 1;
    const value4 = 13;

    const ll = new LinkedList<number>(value1);
    ll.append(value2);
    ll.append(value3);
    ll.append(value4);

    const reversed_ll = ll.reverse();

    expect(ll.length).toBe(4);
    expect(reversed_ll).toEqual([value4, value3, value2, value1]);
  });
});
