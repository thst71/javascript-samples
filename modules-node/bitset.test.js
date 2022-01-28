const AnyName = require("./bitset.js").BitSet
const bitset = require("./bitset.js")

let bitSet = new AnyName();
bitSet.add("1");
console.log("renamed BitSetClass " + bitSet);

let bitSet2 = new bitset.BitSet();
bitSet2.add("1");
console.log("" + bitSet2);

console.log(bitset.HARRAY);

console.log(bitSet instanceof bitset.BitSet);