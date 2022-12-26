// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes("C");
    const fahrencheitExist = degree.toUpperCase().includes("F");

    // Fluxo de erro    
    if(!celsiusExist && !fahrencheitExist) {
        throw new Error('Grau não identificado')
    }

    // Fluxou ideal, Transformando F em C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = (fahrencheit) => (fahrencheit - 32) * 5 / 9
    let degreeSign  = "C"

    // Fluxo alternativo, transformando C em F
    if(celsiusExist) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''))
        formula = (celsius) => celsius * 9 / 5 + 32
        degreeSign = "F"
    }

    return formula(updatedDegree) + degreeSign

}
try {
   console.log(transformDegree('77f')); 
} catch (e) {
    console.error(e.message)
}