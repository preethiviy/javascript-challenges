/*
    Write a function that returns the number of vowels in a string.
    Vowels are the characters 'a', 'e', 'i', 'o', 'u'.
*/

function vowels(s){
    const matches = s.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

function vowels1(s){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let char of s.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }

    return count;
}

function vowels2(s){
    let count = 0;
    for(let char of s.toLowerCase()){
        if(char === "a") count++;
        if(char === "e") count++;
        if(char === "i") count++;
        if(char === "o") count++;
        if(char === "u") count++;
    }

    return count;
}


console.log(vowels2("javascript"));