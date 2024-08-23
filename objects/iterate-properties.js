"use strict";

let parent = {
    task: "mother",
    firstname: "Susanne",
    lastname: "Smith"
};

let child = Object.create(parent);

child.sibling = true;
child.lastname = "Smith";
child[Symbol("dna")] = "the force is strong in you";

console.log("for-in parent =========");
for(const k in parent) {
    console.log(k);
}
console.log("for-in child =========");
for(const k in child) {
    console.log(k);
}

console.log("Object.keys(parent) =========");
for(const k of Object.keys(parent)) {
    console.log(k);
}
console.log("Object.keys(child) =========");
for(const k of Object.keys(child)) {
    console.log(k);
}

console.log("Object.getOwnPropertyNames(parent) =========");
for(const k of Object.getOwnPropertyNames(parent)) {
    console.log(k);
}
console.log("Object.getOwnPropertyNames(child) =========");
for(const k of Object.getOwnPropertyNames(child)) {
    console.log(k);
}

console.log("Object.getOwnPropertySymbols(parent) =========");
for(const k of Object.getOwnPropertySymbols(parent)) {
    console.log(k);
}
console.log("Object.getOwnPropertySymbols(child) =========");
for(const k of Object.getOwnPropertySymbols(child)) {
    console.log(k);
}

console.log("Reflect.ownKeys(parent) =========");
for(const k of Reflect.ownKeys(parent)) {
    console.log(k);
}
console.log("Reflect.ownKeys(child) =========");
for(const k of Reflect.ownKeys(child)) {
    console.log(k);
}

console.log("merge =========");

function merge(target, source) {
    for(const p in source) {
        if(!Reflect.ownKeys(target).includes(p)) {
            target[p] = source[p];
            console.log(`set target[${p}] = ${target[p]}`);
        }
        else console.log(`skipped ${p}`);
    }
}

merge(child, parent);

console.log("merged(child) =========");
for(const k of Reflect.ownKeys(child)) {
    console.log(k);
}

