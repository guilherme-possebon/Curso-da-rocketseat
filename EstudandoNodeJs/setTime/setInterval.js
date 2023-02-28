const timeOut = 1000
const cheking = () => console.log('Cheking');

let interval = setInterval(cheking, timeOut)
setTimeout( () => clearInterval(interval), 4000)