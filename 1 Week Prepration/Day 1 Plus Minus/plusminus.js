

function plusMinus(arr) {
    // Write your code here
let posInt = arr.filter((i) => i > 0)
        let negInt = arr.filter((j) => j < 0)
        let zeroInt = arr.filter((k) => k == 0)
        console.log(posInt.length / arr.length)
        console.log(negInt.length/ arr.length)
        console.log(zeroInt.length / arr.length)
    }