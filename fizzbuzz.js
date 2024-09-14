/*
    Write a program that console logs the numbers from 1 to n.
    But for multiples of 3, print "fizz" instead of the number and "buzz"
    if the number is divisible by 5.
    For numbers which are multiples of both 3 and 5, print "fizzbuzz".
*/

function fizzbuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }else if(i % 3 === 0){
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}

fizzbuzz(20);