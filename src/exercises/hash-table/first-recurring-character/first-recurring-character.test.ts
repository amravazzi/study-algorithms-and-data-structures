describe("First recurring character", () => {
  it.todo(
    "should return 2 given the array [2, 5, 5, 2, 3, 5, 1, 2, 4]",
    () => {}
  );
  it.todo(
    "should return 1 given the array [2, 1, 1, 2, 3, 5, 1, 2, 4]",
    () => {}
  );
  it.todo("should return undefined given the array [2, 3, 4, 5]", () => {});
  it.todo(
    "should return 5 given the array [2, 5, 5, 2, 3, 5, 1, 2, 4]",
    () => {}
  );

  test.each([
    [[2, 5, 5, 2, 3, 5, 1, 2, 4], 2],
    [[2, 1, 1, 2, 3, 5, 1, 2, 4], 1],
    [[2, 3, 4, 5], undefined],
    [[2, 5, 5, 2, 3, 5, 1, 2, 4], 5]
  ])('should return %i given the array %i', (arr, result) => {

  });
});
