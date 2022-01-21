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


function weihnachtscache(hoehe) {
    if(!weihnachtscache.cache) weihnachtscache.cache = {};
    
    let tree;
    if(weihnachtscache.cache[hoehe]) {
        console.log("cached tree - gebraucht, wie neu");
        tree = weihnachtscache.cache[hoehe];
    } else {
        console.log("new tree - Originalverpackt!");
        tree = new Weihnachtsbaum(hoehe);
        weihnachtscache.cache[hoehe] = tree;
    }
    
    tree.aufstellen();
}

weihnachtscache(4);
weihnachtscache(5);
weihnachtscache(6);

console.log(weihnachtscache.cache);

weihnachtscache(4);
weihnachtscache(5);
weihnachtscache(6);
