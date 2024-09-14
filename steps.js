/*
    Write a function that accepts a positive number 'n'.
    The function should print a step shape with 'n' levels using the # symbol.
    Make sure the steps have spaces on the right side.

    Examples:
    steps(2)
        '# '
        '##'
    steps(4)
        '#   '
        '##  '
        '### '
        '####'
*/

function steps(n){
    for(let row = 0; row < n; row++){
        let line = "";
        for(let col = 0; col < n; col++){
            if(col <= row){
                line += "#";
            }else{
                line += " ";
            }
        }
        console.log(line);
    }
}

steps(5);