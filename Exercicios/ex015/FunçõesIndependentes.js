// const random = (number, Math) => Math.floor(Math.random() * number)


// Recursive
// Find the factorial of a number

const factorial = x => {
    // If number is 0
    if (x === 0) {
        return 1
    }
    return x * factorial(--x)
}

console.log(factorial(17));