const str = 141;
// console.log(number);

let convert = str.toString();

// console.log(convert)

function Permutation(str) {
    let string = '';
    for (let i = str.length - 1; i >= 0; i--) {
        string = string + str[i];
    }
    return string == convert;
}
console.log(Permutation(convert));