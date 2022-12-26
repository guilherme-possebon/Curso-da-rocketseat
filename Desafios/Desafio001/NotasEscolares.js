// A = 90
// B = 80 - 89
// C = 70 - 79
// D = 60 - 69
// F = 0 - 59

function getGrade(grade) {
    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade >= 80 && grade <= 89
    let gradeC = grade >= 70 && grade <= 79
    let gradeD = grade >= 60 && grade <= 69
    let gradeF = grade < 60 && grade >= 0

    let finalGrade = ''

    if (gradeA) {
        console.log('Nota A');
    } else if (gradeB) {
        console.log('Nota B');
    } else if (gradeC) {
        console.log('Nota C');
    } else if (gradeD) {
        console.log('Nota D');
    } else if (gradeF) {
        console.log('Nota F');
    } else {
        console.log('Nota invalida');
    }

    return finalGrade
}

console.log( getGrade(2345));
console.log( getGrade(24));
console.log( getGrade(-1));
console.log( getGrade(67));
console.log( getGrade(95));
console.log( getGrade(101));
console.log( getGrade(80));
console.log( getGrade(72));