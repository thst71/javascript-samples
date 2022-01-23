class StringSet {
    #data = new Set();
    static #assertString = function (p) {
        if(typeof p !== "string") 
            throw TypeError("all elements must be strings") 
        else return true
    };

    constructor(...initialData) {
        if(initialData) {
            let allString = initialData.every(p => typeof p === "string");
            if(!allString) throw TypeError("all elements in the initial set must be strings");
        }
        this.#data = new Set(initialData);
    }

    has(p) {
        StringSet.#assertString(p);
        return this.#data.has(p);
    }

    add(p) {
        StringSet.#assertString(p);
        return this.#data.add(p);
    }

    remove(p) {
        StringSet.#assertString(p);
        return this.#data.delete(p);
    }

    forEach(fEFunction, thisArg) {
        this.#data.forEach(fEFunction, thisArg);
    }

    *[Symbol.iterator]() {
        for(const s of this.#data) yield s;
    }
}


let mySet = new StringSet("a", "hi", "world");

try {
    mySet.has(1);
    fail("has accepts number");
} catch {}

try {
    mySet.add(1);
    fail("add accepts number");
} catch {}

try {
    mySet.remove(1);
    fail("remove accepts number");
} catch {}

mySet.has("a") || fail ("no a")
mySet.has("b") && fail ("has no b")

mySet.add("b")
mySet.has("b") || fail ("no b")

mySet.remove("b")
mySet.has("b") && fail ("has no b")

let x = 0;
mySet.forEach(a => x++);
x === 3 || fail("forEach: x != 3");

x = 0;
for(const a of mySet) {
    x++;
}
x === 3 || fail("for-of: x != 3");

function fail(p) { throw p; return false }