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

class NumberExtractor {
    constructor(text) {
        this.text = text;
    }

    searchNumbers() {
        this.numbers = [];

        let textPos = 0;
        let mode = mode_read;
        let currentNumber = "";
        
        let shieldedText = `${this.text}\0`;

        while(textPos < shieldedText.length) {
            let textChar = shieldedText[textPos];

            if(digits.indexOf(textChar)>=0) {
                mode = mode_digit;
                currentNumber = `${currentNumber}${textChar}`;
            }
            else if(mode === mode_digit) {
                console.log(`found ${currentNumber}`);
                this.numbers[this.numbers.length] = Number(currentNumber);
                mode = mode_read;
                currentNumber = "";
            }

            textPos++;
        }
    }
}

let nE = new NumberExtractor("0-Hello 1234, bla 123, Super12Toll, und eine 1.012\n345");
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