//  Map : Map method basically used to creating new array of an existing one the function.

const arr = [1, 2, 3, 4];

const multiplyTwo = arr.map((num, i) => {
    return num * 2;
})

console.log(multiplyTwo);

// Filter : Filter method takes each element of an array and its apply a condition then condition is element push the array and condition is false element do not push in array.

const num = [1, 2, 3, 4];

const GreaterThanTwo = num.filter((nums) => {
    return nums > 2;
})

console.log(GreaterThanTwo)

// Reduce : Reduce method reduce the array of value down to just one value. just like map and filter execute the callback also reducing the array.

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
})
console.log(sum)