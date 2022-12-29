class Atleta {
    peso;
    categoria;

    constructor(pesoc) {
        this.peso = pesoc
    }
    definirCategoria() {
        if(this.peso <= 50) {
            this.categoria = 'Infantil'
        } else if (this.peso <=65) {
            this.categoria = 'Juvenil'
        } else {
            this.categoria = 'Adulto'
        }
    }
}
class Lutador extends Atleta {
    constructor(pesoc) {
        super(pesoc)
    }
    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'Pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'Leve'
        } else if (this.peso <= 75) {
            this.categoria = 'Meio-leve'
        } else {
            this.categoria = 'Pesado'
        }
    }
}
