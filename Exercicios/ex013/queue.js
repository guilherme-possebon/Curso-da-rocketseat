// Passo 1: Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`);
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`);
    }
}

// Passo 2: Utilizando

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Pedro')
fila.enqueue('Paulo')
fila.enqueue('Jose')
fila.enqueue('Ariel')

console.log('A fila está cheia');


function saiu() {

    fila.dequeue()
    fila.dequeue()
    fila.dequeue()
    fila.dequeue()
    fila.dequeue()
    fila.dequeue()
}

setTimeout(saiu, 3000)


