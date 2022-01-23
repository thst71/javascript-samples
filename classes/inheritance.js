"use strict";

function Parent(count) {
    this.counter = count;
}

// assign public / private 
Object.assign(Parent.prototype, {
    up() { this.counter++ },
    down() { this.counter-- }
});

// Vererbung in Javascript
// 1. Verbinde die Constructor-Functions und platziere "this" auf der neuen Klasse
function Child() {
    Parent.call(this, 10);
}

// 2. Verbinde den Prototype mit dem Eltern-Prototype
Child.prototype = Object.create(Parent.prototype);

// 3. Korrigiere den Constructor
Object.assign(Child.prototype, {
    constructor: Child,
    leap() { this.counter += 10 }
});

let child = new Child(); // "extends" Parent(10)

console.log(child.counter);
child.up();
console.log(child.counter);
child.down();
console.log(child.counter);
child.leap();
console.log(child.counter);

//  Private Variables für Properties nachträglich hinzugefügt

// define private Variables in einer eigenen Funktion, die den Parent Prototype modifiziert
(function () {
    let _velocity = 100;
    const MAX_VELOCITY = 380;

    Object.defineProperty(Parent.prototype,
        "velocity", {
        get() { return _velocity },
        set(v) { _velocity = v }
    });

    Object.assign(Parent.prototype, {
        changeVelocity(byAmount) {
            if (_velocity + byAmount > MAX_VELOCITY) {
                _velocity = MAX_VELOCITY;
            } else if (_velocity + byAmount < 0) {
                _velocity = 0;
            } else {
                _velocity += byAmount;
            }
        }
    });
})();


console.log(child.velocity);
child.changeVelocity(100);
console.log(child.velocity);
child.changeVelocity(100);
console.log(child.velocity);
child.changeVelocity(100);
console.log(child.velocity);
child.changeVelocity(-100);
console.log(child.velocity);
child.changeVelocity(-100);
console.log(child.velocity);
child.changeVelocity(-100);
console.log(child.velocity);
child.changeVelocity(-100);
console.log(child.velocity);
