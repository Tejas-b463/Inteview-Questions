const num = 3;

function factorial(num) {
    let ans = 1;
    if (num === 0) {
        return 1;
    } else {
        for (let i = 2; i <= num; i++) {
            ans = ans * i;
        }
        return ans;
    }
}
console.log(factorial(num))