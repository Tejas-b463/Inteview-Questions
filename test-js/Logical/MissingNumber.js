const arr = [1, 3, 0]

// output - 2 
//  1+3+0 = 4; 
// 0+1+2+3+ = 6
// 6-4 = 2

function MissingNumber(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];l
    }
    return nums.length * (nums.length + 1) / 2 - sum;
}
console.log(MissingNumber(arr));