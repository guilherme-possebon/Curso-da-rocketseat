const expressconst = require('express')
const axios = require('axios')

const app = expressconst()

app.listen('3000')

// -----------------------------------------------------------------------
// Usando o metodo GET
// -----------------------------------------------------------------------

// app.route('/').get( (req,res) => res.send('hello') )
// app.route('/sobre').get( (req,res) => res.send('hello sobre') )


// -----------------------------------------------------------------------
// Usando o metodo POST
// -----------------------------------------------------------------------

// // Middleware
app.use(expressconst.json())
// app.route('/').post((req,res) => res.send(req.body))


// -----------------------------------------------------------------------
// Usando o metodo PUT
// -----------------------------------------------------------------------

// app.route('/').get( (req,res) => res.send(author))

// let author = 'Guilherme'
// app.route('/').put( (req,res) => {
//     author = req.body.author
//     res.send(author)
// })


// -----------------------------------------------------------------------
// Usando o metodo DELETE
// -----------------------------------------------------------------------

// app.route('/:identificador').delete( (req,res) => {
//     res.send(req.params.identificador)
// })


// -----------------------------------------------------------------------
// Usando Body Params
// -----------------------------------------------------------------------
// // Middleware
// app.use(expressconst.json())

// app.route('/').post( (req, res) => {
//     const {nome, cidade, array} = req.body
//     res.send(`Meu nome é ${nome} e minha cidade é ${cidade}, e os elementos que estão dentro da array são ${array} `)
// })


// -----------------------------------------------------------------------
// Usando Route Params
// -----------------------------------------------------------------------
// app.route("/").get( (req,res) => res.send('oi'))
// app.route("/:variavel").get( (req,res) => res.send(req.params.variavel))
// app.route("/identidade/:variavel").get( (req,res) => res.send(req.params.variavel))


// -----------------------------------------------------------------------
// Usando Query Params
// -----------------------------------------------------------------------
// app.route('/').get((req, res) => res.send(req.query.nome))
// app.route('/about/user').get((req, res) => res.send(req.query))


// -----------------------------------------------------------------------
// Usando API do Github
// -----------------------------------------------------------------------
app.route('/').get((req,res) => {
    axios.get('https://api.github.com/users/guilherme-possebon')
    .then(result => res.send(`<img src='${result.data.avatar_url}'/>`))
    .catch(e => console.error(e))
})