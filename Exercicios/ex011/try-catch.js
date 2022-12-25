function sayMyName (name = '') {
    if (name === '') {
        throw new Error("Nome é necessario")
    }

    console.log(name);
}

try {
    sayMyName('')
} catch(e) {
    console.log(e)
}