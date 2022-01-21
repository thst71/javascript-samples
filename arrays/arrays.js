let ar = [..."212"];
let a = Array.from(new Set(ar)); // -> [”2”,”1”]
let b = Array.from("123"); // -> [”1”,”2”,"3"]

console.log(a, b);

a.forEach( x => console.log(x));
a.forEach( (i, x) => console.log(`a[${i}] = ${x}`));

// push, pop, unshift, shift
// Stack, Queue

const Stack = {
    push(x) {
        if(!this.data) this.data = []; 
        this.data.push(x)
    },
    pop() {return this.data.pop()},
    toString() { return this.data.join(",") }
}

let myStack = Object.create(Stack);
myStack.push(10);
myStack.push(5);
myStack.push(3);
myStack.push(2);
myStack.push(1);

console.log(`Stack: ${myStack}`);
console.log(myStack.pop());
console.log(`Stack: ${myStack}`);
console.log(myStack.pop());
console.log(`Stack: ${myStack}`);
console.log(myStack.pop());
console.log(`Stack: ${myStack}`);
console.log(myStack.pop());
console.log(`Stack: ${myStack}`);
console.log(myStack.pop());
console.log(`Stack: ${myStack}`);

const Queue = {
    push(x) {
        if(!this.data) this.reset(); 
        this.data.unshift(x)
    },
    pop() {return this.data.pop()},
    toString() { return this.data.join(",") },
    reset() { this.data = [] }
}

let myQueue = Object.create(Queue);
myQueue.push(10);
myQueue.push(5);
myQueue.push(3);
myQueue.push(2);
myQueue.push(1);

console.log(`Queue: ${myQueue}`);
console.log(myQueue.pop());
console.log(`Queue: ${myQueue}`);
console.log(myQueue.pop());
console.log(`Queue: ${myQueue}`);
console.log(myQueue.pop());
console.log(`Queue: ${myQueue}`);
console.log(myQueue.pop());
console.log(`Queue: ${myQueue}`);
console.log(myQueue.pop());
console.log(`Queue: ${myQueue}`);

let myQueue2 = Object.create(Queue);
myQueue2.push("0");
myQueue2.push("1");
myQueue2.push("2");
myQueue2.push("3");
myQueue2.push("4");
myQueue2.push("5");
for(let i=0; i<10; i++) {
    if(i%2 === 0) myQueue2.push("/");
    else myQueue2.push("\\");
    myQueue2.pop();
    console.log(`${myQueue2}`);
}

myQueue2.reset();
for(let c of [..."Hello World! "].reverse()) myQueue2.push(c);
for(let i=0; i<100; i++) {
    console.log(`${myQueue2}`);
    myQueue2.push(myQueue2.pop());
}
console.log(`${myQueue2}`);


// slice(), splice(), fill(), copyWithin()
console.log([..."0123456789"].slice(4));
console.log([..."0123456789"].slice(4,7));

const s_digits = [..."0123456789"];
let s_a;
console.log("splice to end")
s_a = [...s_digits]; 
console.log(s_a.splice(4)); // delete to end, return deleted
console.log(s_a);

console.log("splice from end")
s_a = [...s_digits]; 
console.log(s_a.splice(-4)); // delete from end, return deleted
console.log(s_a);

console.log("splice a part in the middle")
s_a = [...s_digits]; 
console.log(s_a.splice(4, 3)); // delete 4 + 3, return deleted
console.log(s_a);

console.log("splice a part in the middle, count from end")
s_a = [...s_digits]; 
console.log(s_a.splice(-4, 3)); // delete -4 + 3, return deleted
console.log(s_a);

console.log("splice a part in the middle, replace with words")
s_a = [...s_digits]; 
console.log(s_a.splice(4, 3, "vier", "fünf", "sechs"));
console.log(s_a);

console.log("splice a part in the middle, replace with X")
s_a = [...s_digits]; 
console.log(s_a.splice(4, 3, ...[..."X".repeat(3)]));
console.log(s_a);

console.log("splice a part in the middle, replace with Y")
s_a = [...s_digits]; 
console.log(s_a.splice(2, 6, ...[..."Y".repeat(3)]));
console.log(s_a);

