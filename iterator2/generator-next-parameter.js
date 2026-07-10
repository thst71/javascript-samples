function* generator(parameter)  {
    console.log(`generator(): executing first call to next(), yield never executed. 
    parameter of first call to next(...) is lost! 
    only have initial generator() parameter: parameter="${parameter}"`);
    const p2 = yield 1;
    console.log(`generator(): yield returns parameter of 2nd next() call: next(${p2})`);
 }
const it = generator("foo");
console.log(`for-of-loop: next(this is lost) -> ${JSON.stringify(it.next("this is lost"))}`);
console.log(`for-of-loop: next(baz) -> ${JSON.stringify(it.next("baz"))}`);

