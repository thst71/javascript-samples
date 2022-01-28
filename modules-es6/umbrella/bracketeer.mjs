
class Bracketeer {

    parse(term) {
        let open = 0
        let pos = 0

        for (let char of term) {
            if (char === '(') {
                open++
            }
            else if (char === ')') {
                open--
            }

            if (open < 0) {
                return { result: false, position: pos, open: open }
            }

            pos++
        }

        if (open !== 0) {
            return { result: false, position: pos, open: open }
        }

        return { result: true, position: pos, open: 0 }
    }

}

export { Bracketeer }