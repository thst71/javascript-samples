import Sieve from "./sievegen.mjs";

console.log([... new Sieve(30)].join(","));

for(let p of new Sieve(100)) { console.log(p) }

const [a, b, ...remaining] = [...new Sieve(100)];

console.log(a,b, remaining);

let count;
let sum_for, sum_for2, sum_spread, sum_while;

count = sum_for = sum_for2 = sum_spread = sum_while = 0;

const MAX_VALUE = 5_000_000;

while(count++ < 200) {
    sum_spread+=time( () => [... new Sieve(MAX_VALUE)].length);
    sum_for2+=time( () => { // noinspection StatementWithEmptyBodyJS
        for(let it = new Sieve(MAX_VALUE)[Symbol.iterator](), a={}; !a.done; a = it.next()); });
    sum_while+=time( () => { let it = new Sieve(MAX_VALUE)[Symbol.iterator](); let a; while(!a?.done) a = it.next();});
    sum_for+=time(() => {for(let p of new Sieve(MAX_VALUE)){} });

    console.log(`${String(count).padStart(10, " ")} | \
    Avg FOR = ${Math.round(sum_for / count)} \
    --- Avg Spread = ${Math.round(sum_spread / count)}\
    --- Avg While = ${Math.round(sum_while / count)}\
    --- Avg For;; = ${Math.round(sum_for2 / count)}\
    `);
}


function time(callback, ...p) {
    let before = new Date();
    callback(...p);
    let after = new Date();
    return after - before;
}

