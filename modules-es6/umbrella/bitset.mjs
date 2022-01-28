export default class BitSet {
    #set;

    constructor() {
        this.#set = new Set();
    }

    add(p) {
        this.#set.add(p)
    }

    toString() {return [...this.#set].join("\n")}
}

export const HARRAY = [..."Harry"];

export {
    HARRAY as HARRY, // since 1.2
    HARRAY as Harry, // since 1.5
    HARRAY as Hairy  // since 2.0
}