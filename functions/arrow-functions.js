
const f = x => { return { value: x }; };  // 👍 
const g = x => ({ value: x });            // 👍 
const i = x => { value: x };              // unklar: undefined
//const j = x => { v: x, w: x };            // Error

const arrow = () => 1;

try {
    new arrow(); // Error, arrow Functions haben keinen Prototype    
}
catch(e) {
    console.log(e);
} 

try {
    // und es kann auch keiner hinzugefügt werden
    arrow.prototype = {
        hello() { console.log("Hello") }
    };
    
    new arrow().hello();
}
catch(e) {
    console.log(e);
} 
