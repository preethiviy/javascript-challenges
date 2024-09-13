/*
    Given a string, return a new string with the reverse order of characters
*/

function reverseString1(str){
    return str.split("").reverse().join("");
}

function reverseString2(str){
    let result = "";
    for(let char of str){
        result = char + result;
    }

    return result;
}

function reverseNumber(num){
    let reverseNumInString = num.toString().split("").reverse().join("");
    return parseInt(reverseNumInString) * Math.sign(num);
}

console.log(reverseString2("hello"));
console.log(reverseNumber(-15));