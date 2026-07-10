"use strict";


let product = [1,2,3,4,5].reduce((p, n) => p*n, 1);
console.log(product);


const INPUT = "abc123,ß,456ski0p me 22";
const DIGITS = "0123456789";

let numbers = [];

// find digit-sequences in input data

let digitizer = (sequence, nextChar) =>
    DIGITS.includes(nextChar) ? sequence + nextChar
        : (sequence && numbers.push(sequence), "");

numbers.push([...INPUT].reduce( digitizer, ""));
let result = numbers.map(Number);
console.log(result);

numbers = [];
numbers.push([].reduce.call(INPUT, digitizer, ""));
let result2 = numbers.map(Number);
console.log(result2);