class Result {
    constructor() {
        this.numbers = [];
        this.sum = 0;
        this.product = 1;
    }
}

const digits = "0123456789";

const mode_read = "read";
const mode_digit = "digit";

class NumberExtractorRegExp {
    constructor(text) {
        this.text = text;
    }

    searchNumbers() {
        let numberExp = /\d+/g;
        let matches = this.text.match(numberExp);
        let result = []
        for(let m of matches) result[result.length] = Number(m)
        this.numbers = result
    }
}

let nE = new NumberExtractorRegExp("0-Hello 1234, bla 123, Super12Toll, und eine 1.012\n345");
nE.searchNumbers();
console.log("Testing, if all numbers are found: ");
console.log(""+nE.numbers == [0, 1234, 123, 12, 1, 12, 345]);

let result = new Result();
result.numbers = nE.numbers;

for(let n of result.numbers) {
    result.product *= n;
    result.sum += n;
}

console.log("Product === 0: ", result.product === 0);
console.log("Summe === 1727: ", result.sum === 1727);