"use strict"

class BigCalc {

    constructor(nachkommastellen) {

        this.nachkommastellen = nachkommastellen;
        this.factor = 10n ** BigInt(nachkommastellen);
        this.result = 0n;
    }

    operation(opChar, amount) {
        if( Number.isNaN(amount) ) return NaN;
        let bigAmount 
        if(typeof amount === 'bigint') {
            bigAmount = amount
        } else {
            // Gefahr von Überlauf!
            bigAmount = BigInt(Math.round(Number(amount) * Number(this.factor)));
        }

        switch(opChar) {
            case 'set':
                this.result = bigAmount;
                break;

            case '+':
                this.result += bigAmount;
                break;
    
            case '-':
            this.result -= bigAmount;
            break;

            case '*':
                this.result *= bigAmount;
                this.result /= this.factor;
                break;
        
            case '/':
                this.result /= bigAmount;
                this.result *= this.factor;
                break;

            default:
                console.log("Unknown operation " + opChar);
        }

        console.log(`${opChar} ${this.fmt(bigAmount)} = ${this.fmt(this.result)} // ${this.result}`);
        return this;
    }

    plus(amount) {
        return this.operation("+", amount);
    }

    minus(amount) {
        return this.operation("-", amount);
    }

    mult(amount) {
        return this.operation("*", amount);
    }

    div(amount) {
        return this.operation("/", amount);
    }

    pwr(amount) {
        let bigAmount = BigInt(amount)
        
        this.result **= bigAmount;
        this.result /= this.factor ** (bigAmount-1n);

        console.log(`** ${amount} = ${this.fmt(this.result)} // ${this.result}`);
        return this;
    }
    
    fmt(bi) {
        let str = bi.toString();
        return `${str.slice(0, -this.nachkommastellen)},${str.slice(-this.nachkommastellen)}`;
    }

    reset(val) {
        return this.operation('set', val);
    }

    total() {
        return this.fmt(this.result);
    }
}

module.exports = {BigCalc};