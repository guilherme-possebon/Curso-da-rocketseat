// // Estrutural (menos recomendado a usar)

// let altura = 50
// let largura = 60
// function calcularArea() {
//     return altura * largura
// }
// let area = calcularArea()

// Orietação a Objetos (Mais recomendado a usar)

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    get area() {
        return this.#calcularArea()
    }
    #calcularArea() {
        return this.altura * this.largura
    }
    // O "#calcularArea()" não vai ser visivel fora da class
}

// Criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area);