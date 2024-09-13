/*
    Given an array and chunk 'size', divide the array into subarrays
    where each subarray is of length 'size'
*/

function chunk(array, size){
    let index = 0;
    let result = [];

    while(index < array.length){
        result.push(array.slice(index, index + size));
        index = index + size;
    }

    return result;
}

console.log(chunk([1,2,3,4,5], 2));