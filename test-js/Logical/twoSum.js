let arr = [2, 3, 4, 1]
let target = 7;

const two = (arr, target) => {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(two(arr, target));