let withPi = {
    get pi() { const pi = 3.141; return pi; },

    get radius() {
        console.log("getting the value through the getter");
        return this._radiusValue;
    },
    set radius(newRad) {
        console.log("so excited, the setter has been called");
        this._radiusValue = newRad;
    }
}


console.log(withPi.pi);
console.log(withPi.radius);
withPi.radius = 17;
console.log(withPi.radius);