/*
    Implement a function memoize(func) that takes in a function parameter func and 
    returns a memoized version of the function. 
*/

function expensiveFunction(n) {
    console.log("Computing...");
    return n * 2;
}

function memoize(func) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args); // Handle multiple arguments
        if (cache.has(key)) {
            return cache.get(key); // Return cached result
        }
        const result = func.apply(this, args); // Call func with the correct `this`
        cache.set(key, result); // Cache the result
        return result;
    };
}

// Create a memoized version of the function.
const memoizedExpensiveFunction = memoize(expensiveFunction);

// First call (computes and caches the result).
console.log(memoizedExpensiveFunction(5)); // Output: Computing... 10

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveFunction(5)); // Output: 10

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveFunction(10)); // Output: Computing... 20

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveFunction(10)); // Output: 20
