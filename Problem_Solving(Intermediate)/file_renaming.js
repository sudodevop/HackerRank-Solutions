function renameFile(newName, oldName) {
  const newNameLength = newName.length;
  const oldNameLength = oldName.length;
  let dp = new Array(oldNameLength + 1).fill(1);
  for (let i = 1; i <= newNameLength; i++) {
    let dpp = new Array(oldNameLength + 1).fill(0);
    for (let j = i; j <= oldNameLength; j++) {
      dpp[j] = dpp[j - 1];
      if (newName[i - 1] === oldName[j - 1]) {
        dpp[j] += dp[j - 1];
      }
    }
    dp = dpp;
  }
  return dp[oldNameLength] % (10 ** 9 + 7);
}
