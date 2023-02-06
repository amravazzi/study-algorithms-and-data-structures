import MyArray from "./array";

describe("array", () => {
  it("should initialize and empty array", () => {
    const arr = new MyArray();

    expect(arr.lenght).toBe(0);
    expect(arr.data).toBe({});
  });
  it.todo("should get the data in array position");
  it.todo(
    "should push data in the array's last postion and return array lenght"
  );
  it.todo("should remove the last item of the array");
});
