/*
    Implement a debounce function which accepts a callback function and a wait duration. 
    Calling debounce() returns a function which has debounced invocations of the callback 
    function following the behavior described above.

    
*/

function debounce(func, wait) {
    let timeoutId = null;
    return function (...args) {
        const context = this;
        clearTimeout(timeoutId);

        timeoutId = setTimeout(function () {
            timeoutId = null;
            func.apply(context, args);
        }, wait);
    };
}
