"use strict";

const foot = "_|_";

class WeihnachtsbaumString {

    constructor(height) {
        this.height = height;
        this.maxOffset = Math.max(0, height-1);
        this.footOffset = Math.max(0, height-2);
        this.tree = [];
    }

    aufstellen() {
        if(this.tree.length > 0) return;
        if (this.height > 1) {
            let rowOffset = this.maxOffset;
            for (let i=0; i<this.height; i++) {
                let width = i * 2 + 1;
                this.tree.push(`${" ".repeat(rowOffset)}${"*".repeat(width)}`);
                rowOffset--;
            }
            this.tree.push(`${" ".repeat(this.footOffset)}${foot}`);
        }
        else {
            this.tree.push("_|_");
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
        let baum = new WeihnachtsbaumString(hoehe);
        baum.aufstellen();
        tree = weihnachtscache.cache[hoehe] = baum.tree.join("\n"); 
    }
    
    console.log(tree);
}

weihnachtscache(4);
weihnachtscache(5);
weihnachtscache(6);

console.log(weihnachtscache.cache);

weihnachtscache(4);
weihnachtscache(5);
weihnachtscache(6);
