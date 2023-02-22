import MyArray from "./array";

describe("array", () => {
  it("should initialize and empty array", () => {
    const arr = new MyArray();

    expect(arr.length).toBe(0);
    expect(arr.data).toEqual({});
  });
  it("should push data in the array's last postion and return the array new lenght", () => {
    const arr = new MyArray();
    const len1 = arr.push("hello");
    const len2 = arr.push("world");
    const arr_len = arr.length;

    expect(len1).toBe(1);
    expect(len2).toBe(2);
    expect(arr_len).toBe(2);
  });

  it("should get the data in array position", () => {
    const arr = new MyArray();
    arr.push("hello");
    arr.push("world");

    const item = arr.get(1);

    expect(item).toBe("world");
  });

  it("should remove the last item of the array", () => {
    const arr = new MyArray();
    arr.push("hello");
    arr.push("world");
    arr.push("!");

    const popped_item = arr.pop();

    const item = arr.get(arr.length - 1);

    expect(popped_item).toBe("!");
    expect(item).toBe("world");
  });

  it("should remove the item of the array of the given index", () => {
    const index = 1;
    const arr = new MyArray();
    arr.push("hello");
    arr.push("world");
    arr.push("!");

    const deleted_item = arr.delete(index);

    const item = arr.get(index);

    expect(deleted_item).toBe("world");
    expect(item).toBe("!");
  });
});
