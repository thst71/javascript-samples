"use strict";

/*
 o hat keine Eigenschaft p;
 o erbt kein p mit einem setter und o’s „extensible“-Attribute ist false. 
 Da o.p nicht existiert, und kein Setter vorhanden ist, muss o.p angelegt werden. 
 Das ist nicht erlaubt, da o nicht erweiterbar ist. 
*/
const _calculus = {};

let prnt = {
    _bar : null,
    foo : "parent",
    set bar(v) { this._bar = v },
    get bar() { return this._bar },
    set calculus(v) { _calculus[v] = Math.random() * 100 },
    get calculus() { return _calculus }
};

let chld = Object.create(prnt);

Object.preventExtensions(chld);

console.log(Object.isExtensible(chld));
try {
    chld.bar = "no extension with setter"; // Fails
}
catch(e) {
    console.log(">>> Caught error: ", e);
}

try {
    chld.foo = "not extensible";  // TypeError!
}
catch(e) {
    console.log(">>> Caught error: ", e);
}

try {
    chld.calculus = "works";
    console.log(chld.calculus);
}
catch(e) {
    console.log(">>> Caught error: ", e);
}


// o hat eine „own-property“ p die „read-only“ ist - „read-only“ Eigenschaften können nicht geändert werden
let opsample = {};
Object.defineProperty(opsample, "roProp", {value: 42, readonly: true});

try {
    console.log(opsample.roProp);
    opsample.roProp = 17;  // TypeError
}
catch(e) {
    console.log(">>> Caught error: ", e);
}

// o erbt eine Eigenschaft  p die „read-only“ ist - „read-only“ Eigenschaften können nicht überschrieben werden
let chldOpSample = Object.create(opsample);
try {
    console.log(chldOpSample.roProp);
    chldOpSample.roProp = 17;  // TypeError
}
catch(e) {
    console.log(">>> Caught error: ", e);
}
