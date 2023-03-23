import { firstRecurringChar } from "./first-recurring-character";

describe("First recurring character", () => {
  test.each([
    [[2, 5, 1, 2, 3, 5, 1, 2, 4], 2],
    [[2, 1, 1, 2, 3, 5, 1, 2, 4], 1],
    [[2, 3, 4, 5], undefined],
    [[2, 5, 5, 2, 3, 5, 1, 2, 4], 5],
  ])("given the array %i, it should return %i", (arr, result) => {
    expect(firstRecurringChar(arr)).toBe(result);
  });
});
