let aceitar = true

console.log('Pedi uber')

const promessa = new Promise((resolve, reject) => {
    // return resolve() // Se eu retornar resolve(), irá ocorrer tudo bem
    // return reject() // Se eu retornar reject(), estou dizendo que algo deu errado
    if(aceitar) {
        return resolve('Pedido aceito')
    } else {
        return reject('Pedido negado')
    }
})

console.log('Aguardando')

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('Finaliada'))
