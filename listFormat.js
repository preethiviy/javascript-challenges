/*
    Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. 
    A common use case would be in summarizing the reactions for social media posts.

    The function should support a few options as the second parameter:

    1. sorted: Sorts the items by alphabetical order.
    2. length: Show only the first length items, using "and X other(s)" for the remaining. 
        Ignore invalid values (negative, 0, etc).
    3. unique: Remove duplicate items.

    Examples-

    listFormat([]); // ''

    listFormat(['Bob']); // 'Bob'
    listFormat(['Bob', 'Alice']); // 'Bob and Alice'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
    // 'Bob, Ben, Tim, Jane and John'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
        length: 3,
    }); // 'Bob, Ben, Tim and 2 others'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
        length: 4,
    }); // 'Bob, Ben, Tim, Jane and 1 other'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
        length: 3,
        sorted: true,
    }); // 'Ben, Bob, Jane and 2 others'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
        length: 3,
        unique: true,
    }); // 'Bob, Ben, Tim and 2 others'

    listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
        length: 3,
        unique: true,
    }); // 'Bob, Ben, Tim and 2 others'

    listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
*/

function listFormat(items, options = {}) {
    if (!Array.isArray(items) || items.length === 0) return "";

    const { sorted = false, length, unique = false } = options;

    // Step 1: Remove empty strings
    items = items.filter((item) => item.trim() !== "");

    // If items become empty after filtering, return an empty string
    if (items.length === 0) return "";

    // Step 2: Remove duplicates if `unique` is true
    if (unique) {
        items = [...new Set(items)];
    }

    // Step 3: Sort items if `sorted` is true
    if (sorted) {
        items = items.slice().sort();
    }

    // Step 4: Handle the `length` option
    let othersCount = 0;
    if (length > 0 && length < items.length) {
        othersCount = items.length - length;
        items = items.slice(0, length);
    }

    // Step 5: Format the string
    if (items.length === 1 && othersCount === 0) return items[0];
    if (items.length === 2 && othersCount === 0)
        return `${items[0]} and ${items[1]}`;

    let result = "";

    if (othersCount === 0) {
        result =
            items.slice(0, items.length - 1).join(", ") +
            ` and ${items[items.length - 1]}`;
    }

    // Step 6: Add "and X other(s)" if there are additional items
    if (othersCount > 0) {
        if (length === 1) {
            result = `${items[items.length - 1]} and ${othersCount} other${
                othersCount > 1 ? "s" : ""
            }`;
        } else {
            result =
                items.slice(0, items.length - 1).join(", ") +
                `, ${items[items.length - 1]} and ${othersCount} other${
                    othersCount > 1 ? "s" : ""
                }`;
        }
    }

    return result;
}

console.log(
    listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
        length: 1,
        unique: true,
    })
); // 'Bob, Ben, Tim and 2 others'
