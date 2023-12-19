//  Remove Array Duplicate Value

// Array can contains duplicate Value
// Set can not contains duplicate value

let arr = ['a', 'b', 'a'];

// const check = [...new Set(arr)]
// console.log(check)

function duplicateArray(arr) {
    return arr.filter((item, index) =>
        arr.indexOf(item) === index
    )
}
console.log(duplicateArray(arr))


var abc = ["a", "b", "c", "d", "a", "b"]

console.log(...new Set(abc));