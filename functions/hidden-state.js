function counter() { 
    let n = 0; 
    return { 
        count: function () { return n++; }, 
        reset: function () { n = 0; } 
    }; 
}

let myC = counter();

console.log(myC.count());
console.log(myC.count());

myC.reset();

console.log("n" in myC); // --> false
console.log(Object.keys(myC)); 

console.log(myC.count());
console.log(myC.count());