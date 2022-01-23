class Parent {
    constructor() {
        if(new.target === Child) console.log("Parent new.target points to ", new.target);
    }
}

class Child extends Parent {
    constructor() {
        super()
        if(new.target === Child) console.log("Child new.target points to ", new.target, new.target.name);
    }
}


let c = new Child();