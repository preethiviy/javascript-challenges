/*
    Implement a function deepEqual that performs a deep comparison between two values. 
    It returns true if two input values are deemed equal, and returns false if not.

    You can assume there are only JSON-serializable values (numbers, strings, boolean, null, objects, arrays).
    There wouldn't be cyclic objects, i.e. objects with circular references.
*/

/*
    Examples-
    deepEqual('foo', 'foo'); // true
    deepEqual({ id: 1 }, { id: 1 }); // true
    deepEqual([1, 2, 3], [1, 2, 3]); // true
    deepEqual([{ id: '1' }], [{ id: '2' }]); // false

*/

export default function deepEqual(a, b) {
    /// Check if both values are strictly equal
    if (a === b) return true;

    // Check if either value is null or not an object
    if (
        a === null ||
        b === null ||
        typeof a !== "object" ||
        typeof b !== "object"
    ) {
        return false;
    }

    // Check if both are arrays or objects and handle them separately
    const isArrayA = Array.isArray(a);
    const isArrayB = Array.isArray(b);

    // If one is an array and the other is not, they are not equal
    if (isArrayA !== isArrayB) return false;

    // Handle arrays
    if (isArrayA) {
        // Check if arrays have the same length
        if (a.length !== b.length) return false;

        // Recursively compare array elements
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    // Handle objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // Check if both objects have the same number of keys
    if (keysA.length !== keysB.length) return false;

    // Check if all keys and their values are equal
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

// Example Usage
const obj1 = { a: 1, b: { c: 2 }, d: [] };
const obj2 = { a: 1, b: { c: 2 }, d: [] };
const obj3 = { a: 1, b: { c: 2 }, d: [1] };
const arr1 = [];
const arr2 = [];

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(arr1, {})); // false
