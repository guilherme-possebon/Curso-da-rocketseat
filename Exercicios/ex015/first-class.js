const sayMyName = () => console.log('Gui');
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random));