class BitSet {
    #set;

    constructor() {
        this.#set = new Set();
    }

    add(p) {
        this.#set.add(p)
    }

    toString() {return [...this.#set].join("\n")}
}

const HARRAY = [..."Harry"];

module.exports = {
    BitSet,
    HARRAY
}