import AnyName from "./bitset.js"
import AnyName2, * as bitsetModule from "./bitset.js"

let bitSet = new AnyName();
bitSet.add("1");
console.log("" + bitSet);

let bitSet2 = new AnyName2();
bitSet2.add("2");
console.log("" + bitSet2);

console.log(bitsetModule.HARRAY);
console.log(bitsetModule.HARRY);
console.log(bitsetModule.Harry);
console.log(bitsetModule.Hairy);