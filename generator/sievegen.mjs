export default class SieveGen {
    #size;
    #upperBounds;

    constructor(size) {
        this.#size = size;
        this.#upperBounds = Math.sqrt(size);
    }

    * [Symbol.iterator]() {
        let primes = Array(this.#size);

        for (let nextPrime = 1;
             nextPrime < this.#size;
        ) {
            do {
                if (++nextPrime >= primes.length) return;
            } while (primes[nextPrime])

            if (nextPrime < this.#upperBounds) {
                for (let idx = nextPrime ** 2; idx < primes.length; idx += nextPrime) {
                    primes[idx] = true;
                }
            }

            yield nextPrime;
        }
    }
}
