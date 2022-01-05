function magic(words, ...values) {

    for(let index = 0; index < words.length; index++) {
        console.log(`${index} | "${words[index]}" | "${words.raw[index]}" | "${values[index]}"`)
    }

    return "foobar"
}


let medium = ['air', 'water', 'earth', 'space', 'sound', 'culture', 'tv'];

let m1 = magic`This is a \tjourney\t into ${medium[5]}!`
let m2 = magic`This is a journey \ninto ${medium[5]}`

console.log(m1, m2);

