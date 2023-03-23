type returnType = number | undefined;
interface IMap<T> {
  [key: string]: T;
}

// O(n)
// W(n)
export function firstRecurringChar(input: number[]): returnType {
  let map: IMap<number> = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map);
    if (map[input[i]] !== undefined) {
      return input[i];
    }
    map[input[i]] = i;
  }
  return undefined;
}

// O(n^2)
// W(1)
export function naiveFirstRecurringChar(arr: number[]): returnType {
  for (let i = 0; i < arr.length; i++) {
    // i + 1 prevents looping through items already compared
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
}
