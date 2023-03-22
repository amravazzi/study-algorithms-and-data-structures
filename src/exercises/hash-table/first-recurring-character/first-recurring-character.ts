type returnType = number | undefined;

export function firstRecurringChar(arr: number[]): number {
  return 0;
}

export function naiveFirstRecurringChar(arr: number[]): returnType {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
}
