let str1 = 'silent';
let str2 = 'listen';

const checkStr1 = str1.split('').sort().join('')
const checkStr2 = str2.split('').sort().join('')

const checkAnagram = checkStr1 === checkStr2;

console.log(checkAnagram);