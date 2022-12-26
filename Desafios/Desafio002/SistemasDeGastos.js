let familia = {
    entrada: [1200, 1200, 350, 500],
    saida: [1200, 300, 120, 200, 2000]
}
function soma(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }

    return total
}
function calculateBalance() {
    const calcularEntrada = soma(familia.entrada)
    const calcularSaida = soma(familia.saida)

    const total = calcularEntrada - calcularSaida

    const itsOK = total >= 0
    let balanceText = "negativo"

    if(itsOK) {
        balanceText = "positivo";
    }

    console.log(`Seu salto está ${balanceText}: R$${total.toFixed(2)}`);
}

calculateBalance()

