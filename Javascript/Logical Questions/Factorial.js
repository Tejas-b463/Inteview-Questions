let num = prompt("Enter Value of Num");

// function Factorial(n) {
//     if (n === 0) return 1;
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(Factorial(num))

function Factorial(n) {
    if (n === 0) {
        return 1;
    } else {

        return n * Factorial(n - 1)
    }
}
console.log(Factorial(num))