/*
    Check to see if two provided strings are anagrams of each other.
    One string is an anagram of another if it uses the same characters in the same quantity.
    Only consider characters, not spaces or punctuations.
    Consider capital letters to be the same as small letters.
*/

function charMap(str){
    let obj = {};
    str = str.toLowerCase().replace(/[\W]/g,"");
    for(let char in str){
        obj[char] = obj[char] + 1 || 1;
    }

    return obj;
}

function anagrams(string1, string2){
    const charmap1 = charMap(string1);
    const charmap2 = charMap(string2);

    if(Object.keys(charmap1).length !== Object.keys(charmap2).length) return false;

    for(let key in charmap1){
        if(charmap1[key] !== charmap2[key]) return false;
    }

    return true;
}

function cleanString(str){
    return str.toLowerCase().replace(/[\W]/g,"").split("").sort().join("");
}

function anagramsAnotherSolution(string1, string2){
    return cleanString(string1) === cleanString(string2);
}

console.log(anagramsAnotherSolution("RAIL! SAFETY!", "fairy tales"));