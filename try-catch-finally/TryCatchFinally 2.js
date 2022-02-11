const E_UNDEFINED = new Error("Call function with one parameter, that is not empty or null")
const E_NULL = new Error("The parameter given must not be null")

function throwIfEmpty(aValue) {

    if (aValue === undefined) {
        throw E_UNDEFINED
    }

    if (aValue === null) {
        throw E_NULL
    }

    if (aValue === "") {
        throw new Error("String must not be empty")
    }

    if (Number.isNaN(aValue)) {
        throw new Error("The value given in NaN")
    }

    if (typeof aValue === "number" && !Number.isFinite(aValue)) {
        throw new Error("The value given is infinity")
    }

    console.log("valid parameter ", aValue)
}

function handleError(error) {
    switch (error) {
        case E_UNDEFINED :
            handleUndefinedException(error)
            break;
        case E_NULL :
            handleNullException(error)
            break;
        default:
            console.log("unhandled exception, rethrowing: ", error)
            throw error
    }
}

function handleNullException(error) {
    console.log("handled exception: ", error)
}

function handleUndefinedException(error) {
    console.log("handled exception: ", error)
}

// outer try:
try {

    for (func of [
        () => throwIfEmpty(),
        () => throwIfEmpty(null),
        () => throwIfEmpty("this is valid"),
        () => throwIfEmpty(42),
        () => throwIfEmpty(Infinity),
        () => throwIfEmpty(NaN) // this function will never be called
    ]) {
        // inner try:
        try {
            func()
        } catch (error) {
            handleError(error)
        } finally {
            console.log("This code will always run!")
        }

    }

} catch (outer) {
    console.log("This is the outer default exception handler: ", outer)
} finally {
    console.log("This outer finally code will always run")
}

console.log("The application terminates now.")