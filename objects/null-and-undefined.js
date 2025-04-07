"use strict"


let arr = new Array(50);

console.log(arr); // --> []
console.log(arr.length); // 50
for (let i in arr) console.log(i); // not executed
for (let i of arr) console.log(i); // 50 x undefined

console.log(arr[23]); // --> undefined

arr[23] = undefined;
console.log(arr[23]); // --> undefined

console.log(arr[23] === undefined); // --> true

for (let i in arr) console.log(i); // executed once
for (let i of arr) console.log(i); // 50 x undefined