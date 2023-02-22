import { mergeSortedArrays } from "./merge-sorted-arrays";

describe("array", () => {
  it("should merge numeric sorted arrays and keep them sorted", () => {
    const arr1 = [0, 3, 5, 40];
    const arr2 = [4, 9, 30];
    const merged = [0, 3, 4, 5, 9, 30, 40];

    const merge_sorted = mergeSortedArrays(arr1, arr2);

    expect(merge_sorted).toEqual(merged);
  });

  it("should return the non-empty array if one of the arrays is empty", () => {
    const arr1 = [0, 3, 5, 40];
    const arr2: number[] = [];

    const merge_sorted = mergeSortedArrays(arr1, arr2);

    expect(merge_sorted).toEqual(arr1);
  });
});
