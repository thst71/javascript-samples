import CharRange from "./charrange.mjs";

let cRange = new CharRange("b", "p");

console.log([...cRange]);

let [b,c,d,e,...rest] = [...cRange];
console.log(b,c,d,e,rest);