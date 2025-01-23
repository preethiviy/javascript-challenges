/*
    Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

    Implement the curry function which accepts a function as the only argument and returns a function that accepts single arguments and can be repeatedly called until at least the minimum number of arguments have been provided (determined by how many arguments the original function accepts). The initial function argument is then invoked with the provided arguments.

    Examples-
    function add(a, b) {
        return a + b;
    }

    const curriedAdd = curry(add);
    curriedAdd(3)(4); // 7

    const alreadyAddedThree = curriedAdd(3);
    alreadyAddedThree(4); // 7

    function multiplyThreeNumbers(a, b, c) {
        return a * b * c;
    }

    const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
    curriedMultiplyThreeNumbers(4)(5)(6); // 120

    const containsFour = curriedMultiplyThreeNumbers(4);
    const containsFourMulFive = containsFour(5);
    containsFourMulFive(6); // 120
*/

function curry(fn) {
    return function curried(...args) {
        const self = this; // Capture the current `this` context
        if (args.length >= fn.length) {
            // Invoke the original function with the captured `this` context
            return fn.apply(self, args);
        } else {
            // Return a function that captures more arguments, preserving `this`
            return function (...nextArgs) {
                return curried.apply(self, [...args, ...nextArgs]);
            };
        }
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)(4)); // 7

const alreadyAddedThree = curriedAdd(3);
console.log(alreadyAddedThree(4)); // 7

function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
console.log(curriedMultiplyThreeNumbers(4)(5)(6)); // 120

const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120
