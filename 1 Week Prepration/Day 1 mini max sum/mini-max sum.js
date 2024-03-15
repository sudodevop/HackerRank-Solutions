function miniMaxSum(arr) {
    // Write your code here
    let sortedArr = arr.slice().sort((a, b) => a - b);


    let totalSum = arr.reduce((acc, val) => acc + val, 0);

    let minSum = totalSum - sortedArr[arr.length - 1];


    let maxSum = totalSum - sortedArr[0];


    console.log(minSum, maxSum);

}
