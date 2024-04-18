const number = 1235;
// 1+2+3+5 = 11

function sumOfDigit(num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + num % 10;
        num = Math.floor(num / 10);
        // Math.floor method round a number of nearest integer.
    }
    return sum;
}
console.log(sumOfDigit(number))