const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => { // O on é para ficar ouvindo sempre, e o once ouve só o primeiro 
    console.log('Eu ouvi você:', message);
})

ev.emit('saySomething', 'João')
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'João')


