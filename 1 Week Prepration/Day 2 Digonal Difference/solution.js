function diagonalDifference(arr) {
  // Write your code here
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }

      if (i + j === arr.length - 1) {
        d2 += arr[i][j];
      }
    }
  }

  const absDiff = Math.abs(d1 - d2);

  return absDiff;
}
