function outer(a,b) {
    function nested(c) {
        console.log(a, b, c, this);
    }

    console.log(a, b, this);
    return nested;
}

console.log(this);
outer(7,8)(9);