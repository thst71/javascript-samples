import AnyName from "./bitset.js"
import AnyName2, * as bitset from "./bitset.js"

let bitSet = new AnyName();
bitSet.add("1");
console.log("" + bitSet);

let bitSet2 = new AnyName2();
bitSet2.add("2");
console.log("" + bitSet2);

console.log(bitset.HARRAY);
console.log(bitset.HARRY);
console.log(bitset.Harry);
console.log(bitset.Hairy);