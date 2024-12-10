function firstRecurringChar(char) {
  const charsAsArray = char.split("");

  let hash = {};

  for (char of charsAsArray) {
    hash = { ...hash, [char]: hash.hasOwnProperty(char) ? ++hash[char] : 1 };
    if (hash[char] === 2) return char;
  }

  return null;

  //   return charsAsArray.reduce((acc, curr, i, arr) => {
  //     acc = { ...acc, [curr]: acc && acc.hasOwnProperty(curr) ? ++acc[curr] : 1 };

  //     if (acc[curr] === 2) {
  //       acc = curr;
  //       arr.splice(1);
  //     }

  //     return acc;
  //   }, hash);
}

console.log(firstRecurringCharOn("ABCDAEFRTCCC"));