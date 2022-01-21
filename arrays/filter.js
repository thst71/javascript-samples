"use strict";

const DIGITS = "0123456789";

let numbers = [...DIGITS];

let even = numbers.filter( x => x%2 === 0)
console.log(even);
