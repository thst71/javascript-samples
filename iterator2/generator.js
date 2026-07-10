function *generator() {
    console.log("not now, call me later");
    yield 8;
    console.log("yielded 8");
    yield 0;
    console.log("yielded 0");
    yield 1;
    console.log("yielded 1");
}
// define a generator object outside the loop shows that next()
// is not called until the first iteration of the loop
const it = generator();

// the iterator is executed when the for-of loop is started,
// and the first yield returns the first value of x
for( let x of it) {
    console.log(x);
}

