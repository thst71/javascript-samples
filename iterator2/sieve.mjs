export default class Sieve {
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
