"use strict"

function hoisting() {
    var a = 5;

    console.log("pre for: " + a);

    for(var a = 0; a<10; a++) {
        console.log("for: " + a);
    }

    console.log("post for: " + a);
}

function scoped() {
    let a = 5;

    console.log("pre for: " + a);

    for(let a = 0; a<10; a++) {
        console.log("for: " + a);
    }

    console.log("post for: " + a);
}

console.log("Hoisted vars");
hoisting();

console.log("Scoped vars");
scoped();