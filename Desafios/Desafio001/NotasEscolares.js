// A = 90
// B = 80 - 89
// C = 70 - 79
// D = 60 - 69
// F = 0 - 59

let grade = 99
let gradeA = grade >= 90
let gradeB = grade >= 80 && grade < 90
let gradeC = grade >= 70 && grade < 80
let gradeD = grade >= 60 && grade < 70
let gradeF = grade < 60

if (gradeA) {
    console.log('Notas altas');
} else if (gradeB) {
    console.log('Notas boas');
} else if (gradeC) {
    console.log('Notas acima da média');
} else if (gradeD) {
    console.log('Notas na média');
} else if (gradeF) {
    console.log('Notas abaixo da média');
}