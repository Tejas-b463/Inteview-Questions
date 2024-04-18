//  34213 : 5

let num = 12345;

function NumberofDigit(n) {
    let result = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        result++;
    }
    return result;
}
console.log(NumberofDigit(num))