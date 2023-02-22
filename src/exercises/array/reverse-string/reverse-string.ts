export function reverse1(str: string): string {
  if (!str || str.length < 2 || typeof str !== "string")
    return "Something went wrong!";

  const backwards = [];
  const countItems = str.length - 1;

  for (let i = countItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

export const reverse2 = (str: string) => [...str].reverse().join("");
