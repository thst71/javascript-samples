// prototoypes

function ObjectA (aProperty) {
    this.aProperty = aProperty;
}

ObjectA.prototype = {
    aFunction(aParameter) {
        console.log(this.aProperty, " ", aParameter)
    }
}
let objA = new ObjectA(29);
console.log(objA);

objA.aFunction("a function called on object A");

function ObjectB(forObjectA) {
    // fix constructor inheritance
    ObjectA.call(this, forObjectA);
}

ObjectB.prototype = ObjectA.prototype;

let objB = new ObjectB();
objB.aFunction("a function called on object B");

function ObjectC() {
}

ObjectC.prototype = ObjectA; // prototype must be an OBJECT!

let objC = new ObjectC();

try {
    objC.aFunction("call is on object C"); 
} catch(e) {
    console.log(e);
}

function ObjectD() {}
ObjectD.prototype = new ObjectA(17);  // create a prototype with fixed value

let objD = new ObjectD();
objD.aFunction("function called on Object D");

