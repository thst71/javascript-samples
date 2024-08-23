export default class CharRange {
    #from;
    #to;

    constructor(from, to) {
        if(typeof from !== "string" || typeof to !== "string") {
            throw TypeError("from and to must be of type string")
        }

        this.#from = from;
        this.#to = to;
    }

    get from() { return this.#from }
    get to() { return this.#to }

    
    [Symbol.iterator]() {
        let next = this.#from;
        let last = this.#to;
        let charUp = (char) => String.fromCharCode(char.charCodeAt(0)+1)

        return {
            next() {
                let current = next; // store current value
                next = charUp(current); // calc next value
                return ( current <= last) ? {value: current}
                                          : {done: true};  
            },
            return() { 
                console.log("*** break"); 
                return {} 
            },
            [Symbol.iterator]() { return this }
        };
    }
}