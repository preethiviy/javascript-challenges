/*
    Given a string, return the character that is most commonly used in the string.
*/

// Solved using frequency counter
// Some similar string questions that can be solved using frequency counter
// Does string A have the same characters as string B (Anagram)
// Does the given string have any repeated characters in it ?

function maxChar(str){
    let hash = new Map();
    for(let char of str){
        if(hash.get(char)){
            hash.set(char,hash.get(char) + 1);
        }else{
            hash.set(char, 1);
        }
    }

    let maxChar = "";
    let max = 0;

    hash.forEach((value, key) => {
        if(value > max){
            max = value;
            maxChar = key;
        }
    })

    return maxChar;
}

console.log(maxChar("abcaaabc"));