// Weihnachtsbaum.class.js
"use strict";

const foot = "_|_";

class Weihnachtsbaum {

    constructor(height) {
        this.height = height;
        this.maxOffset = Math.max(0, height-1);
        this.footOffset = Math.max(0, height-2);
    }

    aufstellen() {
        if (this.height > 1) {
            let rowOffset = this.maxOffset;
            for (let i=0; i<this.height; i++) {
                let width = i * 2 + 1;
                console.log(`${" ".repeat(rowOffset)}${"*".repeat(width)}`);
                rowOffset--;
            }
            console.log(`${" ".repeat(this.footOffset)}${foot}`);
        }
        else {
            console.log("_|_");
        }
    }
}

for (let i = 0; i < 10; i++) {
    let wb = new Weihnachtsbaum(i);
    wb.aufstellen();
}
