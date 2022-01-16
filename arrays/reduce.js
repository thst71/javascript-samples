"use strict";

const INPUT = "abc123,ß,456skip me 22";
const DIGITS = "0123456789";

let numbers = [];

// find digit-sequences in input data

let digitizer = (sequence, nextChar) => 
    DIGITS.includes(nextChar) ? sequence + nextChar : (numbers.push(sequence), "");

numbers.push([...INPUT].reduce( digitizer, ""));
let result = numbers.filter( x => x );
console.log(result);

numbers = [];
let last, reduced = [(last = [...INPUT].reduce( digitizer, "")) && false, ...numbers, last].filter(x => x)
console.log(reduced);
