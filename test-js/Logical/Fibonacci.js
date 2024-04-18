// 0 1 1 2 3 5 8
// x=0, y=1; fibo = x+y x=y; y=fibo;

let num = 8;
let x = 0,
    y = 1,
    fibo;
console.log(x)
for (let i = 1; i <= num; i++) {
    fibo = x + y;
    x = y;
    y = fibo;
    console.log(fibo)
}