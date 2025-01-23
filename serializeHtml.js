/*
    Given an object which resembles a DOM tree, implement a function that serializes the object into a formatted string with proper indentation (one tab (\t character) per nesting level) and one tag per line.

    Example-
    const tree = {
    tag: 'body',
    children: [
        { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
        { tag: 'div', children: ['baz'] },
    ],
    };

    serializeHTML(tree);
    // Output:
    <body>
        <div>
            <span>
                foo
                bar
            </span>
        </div>
        <div>
            baz
        </div>
    </body>;
*/

function serializeHTML(element) {
    function helper(node, level) {
        const indent = "\t".repeat(level);

        if (typeof node === "string") {
            // Leaf node: text content
            return `${indent}${node}`;
        }

        const { tag, children = [] } = node;
        const openingTag = `${indent}<${tag}>`;
        const closingTag = `${indent}</${tag}>`;

        const serializedChildren = children
            .map((child) => helper(child, level + 1))
            .join("\n");

        return `${openingTag}\n${serializedChildren}\n${closingTag}`;
    }

    return helper(element, 0); // Start with level 0
}

const tree = {
    tag: "body",
    children: [
        { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
        { tag: "div", children: ["baz"] },
    ],
};

console.log(serializeHTML(tree));
