export default class Sieve {
    constructor(size) {
        this.size = size;
    }

    [Symbol.iterator]() {
        let primes = Array(this.size);
        let upperBound = Math.sqrt(this.size);
        let nextPrime = 1;
        return {
            next() {
                do {
                    if(++nextPrime >= primes.length) return {done :true};
                } while(primes[nextPrime])

                if(nextPrime < upperBound) {
                    for (let idx = nextPrime ** 2; idx < primes.length; idx += nextPrime) {
                        primes[idx] = true;
                    }
                    // for(let idx=2; idx*nextPrime < primes.length; idx++) {
                    //     primes[idx*nextPrime] = true;
                    // }
                }

                return { value: nextPrime };
            },
            [Symbol.iterator]: this
        }
    }
}
