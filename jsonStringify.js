/*
    Implement a function jsonStringify, similar to JSON.stringify that converts a JavaScript value into a JSON string.

    Only JSON-serializable values (i.e. boolean, number, null, array, object) will be present in the input value.
    Ignore the second and the third optional parameters in the original API.

    Examples-
    jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
    jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
    jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'

    jsonStringify(null); // 'null'
    jsonStringify(true); // 'true'
    jsonStringify(false); // 'false'
    jsonStringify(1); // '1'
    jsonStringify('foo'); // '"foo"'
*/

function jsonStringify(value) {
    if (value === null) {
        return "null";
    }

    if (typeof value === "boolean" || typeof value === "number") {
        return String(value);
    }

    if (typeof value === "string") {
        return `"${value}"`;
    }

    if (Array.isArray(value)) {
        const elements = value.map((item) => jsonStringify(item));
        return `[${elements.join(",")}]`;
    }

    if (typeof value === "object") {
        const entries = Object.keys(value).map((key) => {
            const keyString = `"${key}"`;
            const valueString = jsonStringify(value[key]);
            return `${keyString}:${valueString}`;
        });
        return `{${entries.join(",")}}`;
    }

    throw new Error("Unsupported value type");
}

console.log(jsonStringify({ foo: "bar" }));
// Output: '{"foo":"bar"}'

console.log(jsonStringify({ foo: "bar", bar: [1, 2, 3] }));
// Output: '{"foo":"bar","bar":[1,2,3]}'

console.log(jsonStringify({ foo: true, bar: false }));
// Output: '{"foo":true,"bar":false}'

console.log(jsonStringify(null));
// Output: 'null'

console.log(jsonStringify(true));
// Output: 'true'

console.log(jsonStringify(false));
// Output: 'false'

console.log(jsonStringify(1));
// Output: '1'

console.log(jsonStringify("foo"));
// Output: '"foo"'
