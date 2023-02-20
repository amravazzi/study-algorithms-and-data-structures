import { reverse1, reverse2 } from "./reverse-string";

describe("array", () => {
  it("should reverse the string", () => {
    const str = "Hello World!";
    const expected_reverse = "!dlroW olleH";

    const reversed1 = reverse1(str);
    const reversed2 = reverse2(str);

    expect(reversed1).toBe(expected_reverse);
    expect(reversed2).toBe(expected_reverse);
  });
});
