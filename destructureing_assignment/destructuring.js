function pointA() {
    let points = [{x: 1, y: 2}, {x: 3, y: 4}];    

    let x1 = points[0].x;
    let y1 = points[0].y;
    let x2 = points[1].x;
    let y2 = points[1].y;

    return (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4);
}

function pointB() {
    let points = { p1: [1,2], p2: [3, 4] };

    let x1 = points.p1[0];
    let y1 = points.p1[1];
    let x2 = points.p2[0];
    let y2 = points.p2[1];

    return (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4);
}

function consumeArray(...parameters) {
    let data = parameters;
    let value;
    while(data.length) {
        [value, ...data] = data;
        console.log(value + " [" + data + "] ");
    }
}

console.log(pointA());
console.log(pointB());

consumeArray( 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b" );
