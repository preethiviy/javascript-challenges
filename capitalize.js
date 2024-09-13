/*
    Write a function that accepts a string. 
    The function should capitalize the first letter of each word in the string
    and then return the capitalize string.
*/

function capitalize(str){
    const words = str.split(" ");

    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("hi, my name is john."));