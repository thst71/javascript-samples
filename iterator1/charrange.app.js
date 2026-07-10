import CharRange from "./charrange.mjs";

let cRange = new CharRange("b", "p");

console.log([...cRange]);

let [b1, c1, d1, e1, ...rest] = [...cRange];
console.log(b1, c1, d1, e1, rest);

console.log("executing cRange iterator with for-of loop");
for(const a of cRange) {
    console.log(a);
}

console.log("execute next() once and break (calls return() method)");
for(const a of cRange) {
    console.log(a);
    break;
}
