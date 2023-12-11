const num = 15;

let x = 0;
let y = 1;

var fibonacci = x + y;
console.log(x)
while (fibonacci < num) {
    console.log(fibonacci)
    fibonacci = x + y;
    x = y;
    y = fibonacci;
}