import * as api from "./umbrella.mjs" 

let terms = [
    {
        data: ["()",
            "(())",
            "(()()(()()(()())))"],
        result: true
    },
    {
        data: [")",
            "(",
            ") (",
            "() (",
            "( () ( () () ) (",
            "( () ( () () )",
            ") ) ) ) ( ( ( ("],
        result: false
    }
]

let pad = (l, str) => String(str).padStart(l, ' ')

let parser = new api.Bracketeer();

for (let termGroup of terms) {
    for (let term of termGroup.data) {
        let parseResult = parser.parse(term)
        console.log(`\
valid: ${pad(5, parseResult.result)} \
stopped at pos ${pad(2, parseResult.position)} \
open count ${pad(2, parseResult.open)} \
on ${term}\
`)
        if (parseResult.result !== termGroup.result) {
            console.log(`${term} did not yield expected result`);
        }
    }
}

let bitSet = new api.BitSet();
bitSet.add("1");
console.log("" + bitSet);