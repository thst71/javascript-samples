import mapIt from "./mapit.mjs";
import CharRange from "./charrange.mjs";


let cRange = new CharRange("b", "p");

console.log([...cRange]);

console.log([...mapIt(cRange, x => x.toUpperCase())]);
