// Function expression
// Function anonymous
let total = 0

const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)


console.log("Fim da execução da segunda function")

function FazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = FazerSuco("Banana", "Maça")

console.log(copo)