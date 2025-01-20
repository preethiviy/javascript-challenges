/*
    Implement a function deepOmit(obj, keys) that removes specified keys and their corresponding values from an object, 
    including nested objects or arrays. It works recursively to traverse through the entire object structure, 
    ensuring that all occurrences of the specified keys are removed at all levels. 
    The function takes in an object (obj) and an array of string keys (keys).
*/

function deepOmit(obj, keys) {
    if (Array.isArray(obj)) {
        // Handle arrays by recursively processing each element
        return obj.map((item) => deepOmit(item, keys));
    } else if (obj !== null && typeof obj === "object") {
        // Handle objects
        return Object.keys(obj).reduce((acc, key) => {
            if (!keys.includes(key)) {
                // Recursively process non-omitted keys
                acc[key] = deepOmit(obj[key], keys);
            }
            return acc;
        }, {});
    }
    // Return primitive values as is
    return obj;
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: 5,
        },
    },
    h: [
        { i: 6, j: 7 },
        { k: 8, l: 9 },
    ],
};

const omitted = deepOmit(obj, ["b", "f", "i"]);
console.log(omitted);
// Output:
// {
//   a: 1,
//   c: {
//     d: 3,
//     e: {
//       g: 5,
//     },
//   },
//   h: [
//     { j: 7 },
//     { k: 8, l: 9 },
//   ],
// }
