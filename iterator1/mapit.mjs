export default function mapIt(iterable, mapfunc) {
    const iter = iterable[Symbol.iterator]();

    return {
        next() {
            let elem = iter.next();
            if(elem.done) return elem;
            return { value : mapfunc(elem.value) };
        },
        [Symbol.iterator]() { return this }
    }
}