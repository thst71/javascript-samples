function magic(words, ...values) {

    console.log("---");
    for(let index = 0; index < words.length; index++) {
        console.log(`${index} | "${words[index]}" | "${words.raw[index]}" | "${values[index]}"`)
    }

    return "foobar"
}

let medium = ['air', 'water', 'earth', 'space', 'sound', 'culture', 'tv'];

console.log("before let");
let m1 = magic`This is a \tjourney\t into ${medium[5]}!`
let m2 = magic`This is a
 journey \ninto ${medium[4]}`

console.log("m1, m2");
console.log(m1, m2);


function nospace(texts, ...values) {
    let out = "";
    for (let i = 0; i < texts.length; i++) {
        out += texts[i].replaceAll(" ", "+");
        if (i < values?.length) out += values[i];
    }

    return out;
}

console.log(nospace`space is big space is dark, it's hard to find a place to park.
                
                
    oooooooooo  
                
                `);
console.log(magic`space is big space is dark, it's hard to find a place to park.${1 + 1}hhh`);

