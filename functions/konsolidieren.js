function konsolidieren(startwert = 0, operation, ...input ) {
    return input.reduce(operation, startwert);
}

console.log(konsolidieren(0, (a,b) => a+b, 1,2,3,4,5));


function wrap(f) {
    return function (...all) {
        console.log("------------");
        console.log(f(...all));
        console.log("------------");
    }
}

let wrappedF = wrap((a,b,c) => a+b+c);
wrappedF(1,2,3);
wrappedF(1,2,3,4);
wrappedF(1,2);
wrappedF();