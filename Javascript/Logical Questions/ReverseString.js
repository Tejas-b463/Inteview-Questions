// Apporach with array method
var str = "javascript";

// string convert into array using split method
// Reverse array using reverse array method
let output = str.split('').reverse().join('')

console.log(output);

// Approach without array method

const name = "Tejas";

function reverseString(str) {
    let output = ''
    for (let i = name.length - 1; i >= 0; i--) {
        output = output + str[i]
    }
    return output
}
console.log(reverseString(name))