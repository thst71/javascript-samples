class Sieve {
    constructor(size) {
        this.size = size;
    }

    [Symbol.iterator]() {
        let primes = Array(this.size);
        let nextPrime = 1;
        return {
            next() {
                do {
                    if(++nextPrime >= primes.length) return {done :true};
                } while(primes[nextPrime])

                for(let idx=2; idx*nextPrime < primes.length; idx++) {
                    primes[idx*nextPrime] = true;
                }

                return { value: nextPrime };
            },
            [Symbol.iterator]: this
        }
    }
}

console.log([... new Sieve(30)].join(","));

for(let p of new Sieve(2000)) { console.log(p) };

[a, b, ...remaining] = [...new Sieve(100)];

console.log(a,b, remaining);

let primerator = new Sieve(10000)[Symbol.iterator](); // just flags
let p;
console.log( "  0 ... 100");
while((p=primerator.next()?.value) && p<100) console.log(p);

console.log( "100 ... 200");
console.log(p); // bereits vom Iterator geholt
while((p=primerator.next()?.value) && p<200) console.log(p);

let large = new Sieve(100_000_000);

for(p of large) console.log(p);