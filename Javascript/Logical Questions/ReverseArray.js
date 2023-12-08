const arr = [1, 3, 34, 5];
// Approach reverse array using reverse array method
arr.reverse()
console.log(arr)


// Approach reverse array without using array method using for loop

const num = [1, 2, 3, 4, 5];

const arr1 = [];

for (let i = num.length - 1; i >= 0; i--) {
    arr1.push(num[i])
}
console.log(arr1);