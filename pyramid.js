/*
    Write a function that accepts a positive number 'n'.
    The function should print a pyramid shape with 'n' levels using the # symbol.
    Make sure the steps have spaces on both left and right side.

    Examples:
    steps(2)
        ' # '
        '###'
    steps(4)
        '   #   '
        '  ###  '
        ' ##### '
        '#######'
*/

function pyramid(n){
    const midCol = Math.floor((2*n-1)/2);
    for(let row = 0; row < n; row++){
        let line = "";
        for(let col = 0; col < 2*n-1; col++){
            if(col >= midCol - row && col <= midCol + row){
                line += "#";
            }else{
                line += " ";
            }
        }

        console.log(line);
    }
}

pyramid(3);