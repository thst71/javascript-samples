class Parent {
    #number

    constructor(number) {
        this.#number = number;
    }


    up() { this.#number++ }

    down() { this.#number-- }

    get number() { return this.#number }
    set number(v) { this.#number+=v }
}


class Child extends Parent {
    constructor() {
        super(10);
    }

    leap() {
        this.number+=10;
    }

    toString() {
        return `Number ${this.number}`
    }
}

let c = new Child();

console.log(c.toString());

c.up();
console.log(c.toString());
c.leap();
console.log(c.toString());
c.down();
console.log(c.toString());
c.down();
console.log(c.toString());
