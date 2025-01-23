/*
    Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

    Example-
    function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
    }

    const mary = {
    age: 21,
    };

    const john = {
    age: 42,
    };

    multiplyAge.myCall(mary); // 21
    multiplyAge.myCall(john, 2); // 84
*/

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("myCall can only be called on functions");
    }

    // If context is null or undefined, default to globalThis (global object)
    context = context || globalThis;

    // Create a unique property on the context to avoid overwriting existing properties
    const uniqueKey = Symbol();

    // Assign the function (`this`) to the unique property of the context
    context[uniqueKey] = this;

    // Invoke the function with the provided arguments and store the result
    const result = context[uniqueKey](...args);

    // Clean up: delete the temporary property from the context
    delete context[uniqueKey];

    // Return the result of the function call
    return result;
};

function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}

const mary = { age: 21 };
const john = { age: 42 };

console.log(multiplyAge.myCall(mary)); // 21
console.log(multiplyAge.myCall(john, 2)); // 84
