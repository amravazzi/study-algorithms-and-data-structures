export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  let finalArray: number[] = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      finalArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      finalArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return finalArray;
}
