let number = 2

// Stateful function
function square() {
    return number * number
}

number = square()

// Stateless function
const squareConst = n => n * n
Console.log(squareConst(8, 8));
