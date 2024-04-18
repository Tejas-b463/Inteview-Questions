const arr = [23, 44, 56, 5, 78, 3];

function MaxiNum(arr) {
    let maxiNumber = [0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxiNumber) {
            maxiNumber = arr[i]
        }
    }
    return maxiNumber;
}
console.log(MaxiNum(arr));