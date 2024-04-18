const number = 5;
// 1+2+3+4+5 = 15

function sumOfNaturalNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;

    // using formula
    // return num * (num + 1) / 2
}
console.log(sumOfNaturalNumber(number));