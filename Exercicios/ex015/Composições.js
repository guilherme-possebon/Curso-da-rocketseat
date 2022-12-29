const people = ["Rafa", "Diego", "Dani", "Rod"]
const upperCasePeopleTahtStartsWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())
console.log(upperCasePeopleTahtStartsWithD)