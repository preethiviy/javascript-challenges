/*
    Implement a function promisify that takes a function following the common callback-last error-first style, 
    i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

    Example-
    // Example function with callback as last argument
    // The callback has the signature `(err, value) => any`
    function foo(url, options, callback) {
    apiCall(url, options)
        .then((data) => callback(null, data))
        .catch((err) => callback(err));
    }

    const promisifiedFoo = promisify(foo);
    const data = await promisifiedFoo('example.com', { foo: 1 });
*/

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            // Add a callback as the last argument
            fn.call(this, ...args, (err, value) => {
                if (err) {
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(value); // Resolve the promise with the result
                }
            });
        });
    };
}
