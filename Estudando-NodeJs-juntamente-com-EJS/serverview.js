const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const items = [
    {
        title: 'D',
        message: 'esenvolver aplicações/serviços de forma fácil'
        
    },
    {
        title: 'E',
        message: "JS usa javaScript para renderizar HTML"
    },
    {
        title: 'M',
        message: "uito facil de usar"
    },
    {
        title: 'A',
        message: "moung Us"
    },
    {
        title: 'I',
        message: "nstall ejs"
    },
    {
        title: 'S',
        message: "intaxe simples"
    },
]
    const subtitle = 'Uma linguagem de modelagem para criação de paginas HTML usando JavaScript'
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    })
})
app.get("/sobre", (req, res) => {
    res.render("pages/about")
})

app.listen(8080)
console.log("rodando");