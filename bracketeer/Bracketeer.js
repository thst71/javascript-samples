"use strict"

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

class Bracketeer {

    parse(term) {
        let open = 0
        let pos = 0

        for (let char of term) {
            if (char === '(') {
                open++
            }
            else if (char === ')') {
                open--
            }

            if (open < 0) {
                return { result: false, position: pos, open: open }
            }

            pos++
        }

        if (open !== 0) {
            return { result: false, position: pos, open: open }
        }

        return { result: true, position: pos, open: 0 }
    }

}

let pad = (l, str) => String(str).padStart(l, ' ')

let parser = new Bracketeer();

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