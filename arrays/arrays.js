let ar = [..."212"];
let a = Array.from(new Set(ar)); // -> [”2”,”1”]
let b = Array.from("123"); // -> [”1”,”2”,"3"]

console.log(a, b);

a.forEach( x => console.log(x));
a.forEach( (i, x) => console.log(`a[${i}] = ${x}`));