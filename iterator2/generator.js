function *generator() {
    console.log("not now, call me later");
    yield 8;
    console.log("yielded 8");
    yield 0;
    console.log("yielded 0");
    yield 1;
    console.log("yielded 1");
}


for( let x of generator()) {
    console.log(x);
}
