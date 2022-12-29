// Função impura

// Exemplo 1: Está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.Pi * (radius + radius)
}

// Exemplo 2: Está alterando um dado externo
let person = {
    name: 'Rafael Camarda',
    age: 'Jovem'
}       // Para programação funcional isso nem exsiste
function changeName(name) {
    person.name = name 
}

// Função pura
// Exemplo 1: 

const CalculateCircumference = function (pi, radius) {
    return pi * (radius + radius)
}
// console.log(CalculateCircumference(3.14, 27));

// Com arrow function
const CalculateCircumferenceArrowFunction = (pi, radius) => pi * (radius + radius)
// console.log(CalculateCircumferenceArrowFunction(3.14, 27));

// Exemplo 2
const ChangePersonName = (pessoa, name) => ({...pessoa, name})
// console.log(ChangePersonName('Lucas', "Rafael"));