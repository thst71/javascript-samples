function counter() { 
    let n = 0; 
    return { 
        count: function () { return n++; }, 
        reset: function () { n = 0; } 
    }; 
}

let myC = counter();
let myC2 = counter();

console.log("1. Count myC " + myC.count());
console.log("2. Count myC " + myC.count());

console.log("reset the myC counter");
myC.reset();

console.log("3. Count myC " + myC.count());
console.log("4. Count myC " + myC.count());

console.log("is there a property n in myC? -> " + ("n" in myC)); // --> false
console.log("Properties of myC: " + Object.keys(myC));

console.log("Counter myC2 is unchanged: " + myC2.count());
