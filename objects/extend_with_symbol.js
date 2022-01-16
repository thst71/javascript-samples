"use strict";

let o = {
    name : "John",
    age: 34,
    address: "At the old oak"
};

const P_FIRST_NAME = Symbol("Firstname");
const P_LAST_NAME = Symbol("Lastname");
const P_ID = Symbol.for("ID");

o[P_ID] = 1;
o[P_FIRST_NAME] = o.name;
o[P_LAST_NAME] = "Malkovic";

console.log(o[Symbol.for("ID")]);
console.log(o[P_FIRST_NAME]);

console.log("\n--- JSON.stringify()");
console.log(JSON.stringify(o));

console.log("\n--- for-in Loop");
for(let key in o) {
    console.log(`o[${key}] (${typeof key}): ${o[key]}`);
}

console.log("\n--- for-of Reflect.ownKeys()");
for(let key of Reflect.ownKeys(o)) {
    console.log(`o[${key.toString()}] (${typeof key}): ${o[key]}`);
}

console.log("\n--- for-of Object.keys()");
for(let key of Object.keys(o)) {
    console.log(`o[${key.toString()}] (${typeof key}): ${o[key]}`);
}

