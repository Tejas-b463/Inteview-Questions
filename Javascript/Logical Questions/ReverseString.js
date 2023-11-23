// Apporach with array method
var str = "javascript";

// string convert into array using split method
// Reverse array using reverse array method
let output = str.split('').reverse().join('')

console.log(output);

// Approach without array method

const name = "Tejas";

function reverStr(str) {
    for (let i = name.length - 1; i >= 0; i--) {
        console.log(str[i])
    }
}