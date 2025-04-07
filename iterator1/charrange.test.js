import CharRange from "./charrange.mjs";

let cRange = new CharRange("b", "p");

console.log([...cRange]);

let [b1, c1, d1, e1, ...rest] = [...cRange];
console.log(b1, c1, d1, e1, rest);