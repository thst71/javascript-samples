// This in arrow functions in global scope
const o = {
    a : 8,
    oScopeFunction() {
        return this === o;  // this is surrounding object
    },
    oScopeFunctionNested() {
        let self = this; // self === o!
        function oScopeFunctionNestedInside() {  // nested function has no this
            // use self to access o
            return this === globalThis;
        }
        return oScopeFunctionNestedInside(); // true
    },
    oScopeStrictFunctionNested() {
        "use strict";
        let self = this; // self === o!
        function oScopeFunctionNestedInside() {
            // use self to access o
            return this === undefined;
        }
        return oScopeFunctionNestedInside(); // undefined
    },
    oScopeArrowFunctionNested() {
        "use strict";
        let self = this; // self === o!
        let oScopeFunctionNestedInside = () => {
            // use this to access o
            return this === o;
        }
        return oScopeFunctionNestedInside(); // true
    },
    oScopeBindFunctionNested() {
        let oScopeFunctionNestedInside = (function() {
            // use this to access o
            return this === o;
        }).bind(this);
        return oScopeFunctionNestedInside(); // true
    }

}

console.log(o.oScopeFunction());
console.log(o.oScopeFunctionNested());
console.log(o.oScopeStrictFunctionNested());
console.log(o.oScopeArrowFunctionNested());
console.log(o.oScopeBindFunctionNested());