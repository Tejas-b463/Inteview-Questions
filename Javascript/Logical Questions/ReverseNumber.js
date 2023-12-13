let num = 012345;

let string = num.toString();
console.log(string);

function ReverseNumber(str) {
    let output = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        output = output + str[i]

    }
    return output

}
console.log(ReverseNumber(string))