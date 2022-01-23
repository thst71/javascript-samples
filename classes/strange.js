function Range() {}
function Strange() {}

// beide Prototypen sind leer
Strange.prototype = Range.prototype;

console.log(new Strange() instanceof Range, new Range() instanceof Strange);


Range.prototype = {
    constructor: Range,
    foo() {console.log("bar")}
}

let r = new Range();
console.log(r instanceof Range);
r["__proto__"].constructor === Range
1;