/*
    Implement Promise.all() functionalities 
*/

// Resolved example.
/*
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
*/

// Rejection example.
/*
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}
*/

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const results = new Array(iterable.length);
        console.log(results);
        let unresolved = iterable.length;

        if (unresolved === 0) {
            resolve(results);
            return;
        }

        iterable.forEach(async (item, index) => {
            try {
                const value = await item;
                results[index] = value;
                unresolved -= 1;

                if (unresolved === 0) {
                    resolve(results);
                }
            } catch (err) {
                reject(err);
            }
        });
    });
}

promiseAll([p0, p1, p2]);
