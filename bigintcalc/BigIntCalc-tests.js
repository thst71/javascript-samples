const calcModule = require('./BigIntCalc.module');

let calc = new calcModule.BigCalc(5);

let total = calc.plus(10.0)
    .mult(50.0)
    .div(10.0)
    .div(2.5)
    .plus(10_00000n)
    .total();

console.log(`total is ${typeof total}: ${total}`);

total = calc.reset(0.3)
    .minus(0.2)
    .total();
console.log(`total is ${typeof total}: ${total}`);

total = calc.reset(BigInt(Number.MAX_VALUE)*100000n)
    .mult(2)
    .pwr(2n)
    .total();
console.log(`total is ${typeof total}: ${total}`);

total = calc.reset(6.54321)
    .pwr(40)
    .total();
console.log(`total is ${typeof total}: ${total}`);
