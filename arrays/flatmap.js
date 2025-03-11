"use strict"

let array1 = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9, "ABCDEF"],
    10, 11, 12
];

// MAP: each element of the array is available as element to iterator function
// FlAT: the element returned from the map() is flattened by 1

// code returns all elements from array1 as single, flat array
console.log(array1.flatMap(element => {
    console.log("Element: " + typeof (element) + ": " + element);
    return element;
}));

// code returns all characters of all strings of the CSV-line
const headers = ["col1", "col2", "col3", "col4", "col5", "col6", "col7"];
const csvIn = [
    "123,Apfel,45.6,Banane,789,Orange,10.11",
    "Text1,20,Text2,30.5,Text3,40,Text4",
    "1,Zitrone,2,Limette,3,Mango,4",
    "55.5,Erdbeere,66,Blaubeere,77.7,Himbeere,88",
    "Code1,99,Code2,100.1,Code3,101,Code4"
];

const lines = csvIn.map(csvLine => csvLine.split(/,/));
const words = lines.flat(1);

console.log(lines);
console.log(words);

// convert csv lines to object with property-pairs: header: columns
// variation 1: use an empty object and reduce into properties
const table = csvIn.flatMap(csvLine => csvLine.split(/,/)) // list of words
    .map((word, idx) => [headers[idx % headers.length], word]) // mix values into pairs of [header, value]
    .reduce((obj, [key, value]) => (obj[key] = obj[key] ?? []).push(value) && obj, {}) // collect values in elements

console.log(JSON.stringify(table, null, 2));

// variation 2: use a helper function in the sheet object
let sheet = {
    push([key, value]) { // uses destructuring on parameters
        this[key] ? this[key].push(value) : this[key] = [value];
        return this;
    }
}

csvIn.flatMap(csvLine => csvLine.split(/,/)) // list of words
    .map((word, idx) => [headers[idx % headers.length], word]) // mix values into pairs of [header, value]
    .forEach(pair => sheet.push(pair)) // collect values in elements

console.log(JSON.stringify(sheet, null, 2));

// variation 3: use a predefined object with empty arrays
const presetTable = {};
headers.forEach(header => presetTable[header] = []);

csvIn.flatMap(csvLine => csvLine.split(/,/)) // list of words
    .map((word, idx) => [headers[idx % headers.length], word]) // mix values into pairs of [header, value]
    .forEach(([key, value]) => presetTable[key].push(value)) // collect values in elements

console.log(JSON.stringify(presetTable, null, 2));
