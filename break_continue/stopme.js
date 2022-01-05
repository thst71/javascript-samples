function stopMe() {
    outside: for (let i = 1; i < 100; i++) {
        console.log("Running " + i);
        for (let j = 1; j < 100; j++) {
            if (i * j % 30 === 0) {
                console.log("Durch 30 teilbar: " + (i * j)); break;
            }
            console.log("Nicht durch 30 teilbar: " + (i * j));
            if (i * j > 900) {
                console.log("Overflow: " + (i * j));
                break outside;
            }
        }
    }
}

function countTo10() {
    let i=0;
    outside: while(i<10) {
        console.log("Running " + i);
        for (let j = 0; j < 100; j++) {
            if (i * j % 2 === 0) continue;
            
            if (i + j === 10) {
                console.log("got 10: " + i + " + " + j);
                i++;
                continue outside;
            }
        }
        i++;
    }
}

countTo10();
//stopMe();