/*
    Implement a function that returns a new object after squashing the input object into a single level of depth 
    where nested keys are "squashed" together with a period delimiter (.).

    Example-
    const object = {
        a: 5,
        b: 6,
        c: {
            f: 9,
            g: {
                m: 17,
                n: 3,
            },
        },
    };

    squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
*/

function squashObject(obj) {
    const result = {};

    function helper(subObj, prefix) {
        console.log("prefix", prefix);
        for (const key in subObj) {
            if (Object.prototype.hasOwnProperty.call(subObj, key)) {
                const value = subObj[key];
                console.log("currentKey", key);
                console.log("value", value);
                const newKey =
                    key === "" ? prefix : prefix ? `${prefix}.${key}` : key; // Most important logic

                console.log("newKey", newKey);

                if (typeof value === "object" && value !== null) {
                    helper(value, newKey); // Recursive call for nested objects
                } else {
                    result[newKey] = value; // Add flattened key-value pair
                }
            }
            console.log("result", result);
            console.log("*************************\n");
        }
    }

    helper(obj, ""); // Start the recursion with an empty prefix
    return result;
}

const object = {
    a: 5,
    b: 6,
    c: {
        "": {
            "": 8,
            d: 11,
        },
        f: 9,
        g: {
            "": 8,
            m: 17,
            n: 3,
        },
    },
};

const result = squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

console.log(result);
