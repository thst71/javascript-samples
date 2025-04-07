function *generator() {
    yield 1;
    console.log("yielded 1");
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

function *iterate(...arrs) {
    for(const a of arrs) {
        yield *a;
    }

    return;
}

for(const i of iterate([1,2],[3,4,5],[6,7,8])) {
    console.log(i);
}










function *iterate2(...arrs) {
    for(const a of arrs) {
        (Array.isArray(a)) ? yield *a : yield a;
    }

    return;
}

for(const i of iterate2([1,2],33,[3,4,5],[6,7,8])) {
    console.log(i);
}
