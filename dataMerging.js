/*
    Merge objects with the same id in an array of objects
*/

const sessions = [
    { user: 8, duration: 50, equipment: ["bench"] },
    { user: 7, duration: 150, equipment: ["dumbbell"] },
    { user: 1, duration: 10, equipment: ["barbell"] },
    { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
    { user: 7, duration: 200, equipment: ["bike"] },
    { user: 2, duration: 200, equipment: ["treadmill"] },
    { user: 2, duration: 200, equipment: ["bike"] },
];

/*
    Each session has the following fields:

    user: User ID of the session's user.
    duration: Duration of the session, in minutes.
    equipment: Array of equipment used during the sessions, in alphabetical order. 
    There are only 5 different equipments.

    Implement a method mergeData, which is used to return a unified view of each user's 
    activities by merging data from each user. 
    Sessions from the same user should be merged into one object. When merging:

    Sum up the duration fields.
    Combine all the equipment used, de-duplicating the values and sorting alphabetically.
    The order of the results should always remain unchanged from the original set, 
    and in the case of merging sessions with the same users, 
    the row should take the place of the earliest occurrence of that user. 
    The input objects should not be modified.
*/

// function mergeData(sessions) {
//     const obj = new Map();

//     for (let row of sessions) {
//         const userId = row.user;
//         if (!obj.has(userId)) {
//             obj.set(userId, row);
//         } else {
//             let currentValue = obj.get(userId);
//             currentValue.duration = currentValue.duration + row.duration;
//             const currentEquipmentSet = new Set(currentValue.equipment);
//             for (let equipment of row.equipment) {
//                 currentEquipmentSet.add(equipment);
//             }
//             const currentEquipmentArray = Array.from(currentEquipmentSet);
//             currentValue.equipment = currentEquipmentArray.sort();
//         }
//     }

//     return Array.from(obj, ([key, value]) => value);
// }

function mergeData(sessions) {
    const merged = new Map(); // Use a Map to track merged data by user ID

    sessions.forEach((session) => {
        const { user, duration, equipment } = session;

        if (!merged.has(user)) {
            // Create a new entry for the user if not already present
            merged.set(user, { ...session, equipment: [...equipment] });
        } else {
            // Merge the session into the existing user's entry
            const existing = merged.get(user);
            existing.duration += duration;
            existing.equipment = Array.from(
                new Set([...existing.equipment, ...equipment])
            ).sort(); // Deduplicate and sort equipment
        }
    });

    // Convert Map back to an array while preserving original order
    return Array.from(merged, ([key, value]) => value);
}

const returnValue = mergeData(sessions);
console.log(returnValue);
