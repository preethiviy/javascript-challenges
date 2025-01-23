/*
    Implement a throttle function which accepts a callback function and a wait duration. 
    Calling throttle() returns a function which throttled invocations of the callback function 
    following the behavior described above.
*/

function throttle(func, wait) {
    let timeout = null;
    return function (...args) {
        if (!timeout) {
            func.apply(this, args);
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
        }
    };
}
