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
let m2 = magic`This is a journey \ninto ${medium[4]}`

console.log("m1, m2");
console.log(m1, m2);

