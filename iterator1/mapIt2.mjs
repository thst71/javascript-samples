// 1. Erzeuge ein ES6 Module
// 2. für die Funktion mapIt()

// 3. Die Funktion soll ein Iterable und eine Mapping Funktion als Parameter bekommen
// 4. und daraus einen Iterator erzeugen,
// 5. der jeden Wert des Quell-Iterators
// 6. durch die Mapping-Funktion schickt
// 7. und zurückgibt

// 8. Erstelle damit einen UpperCase CharRange Iterator -> mapIt2.app.js


export default function mapIt(iterable, mapFunc) {  // Task 3

    let srcIter = iterable[Symbol.iterator](); // get the source iterator  // Task 4

    return {
        [Symbol.iterator]() {
            return {
                // Task 4
                next: () => {
                    let srcValue = srcIter.next();  // Task 5
                    if (srcValue.done) return srcValue;  // if src Iterator is done, return "done" iterator result (Task 6)

                    const mappedValue = mapFunc(srcValue.value)  // map the srcIterator value to get the new mappedValue (Task 6)

                    return {
                        value: mappedValue
                    }
                },

                [Symbol.iterator]: function () {
                    console.log("*** returning this as iterator")
                    return this
                }
            }
        }
    }
}
