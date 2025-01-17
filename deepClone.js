const entries = {
    firstName: "Preethiviraj",
    lastName: "Yambem",
    address: {
        locality: "Locality",
        state: "Manipur",
    },
    hobbies: ["reading", "movies"],
};

function deepClone(value) {
    if (typeof value !== "object" || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => deepClone(item));
    }

    return Object.fromEntries(
        Object.entries(value).map(([key, value]) => {
            return [key, deepClone(value)];
        })
    );
}

const returnValue = deepClone(entries);
console.log(returnValue);
