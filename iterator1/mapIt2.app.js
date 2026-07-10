// Erstelle damit einen UpperCase CharRange Iterator

import mapIt from "./mapit2.mjs";
import CharRange from "./charrange.mjs"

let cRange = new CharRange("a", "f")

for(const c of mapIt(cRange, c => c.toUpperCase())) {
    console.log(c)
}