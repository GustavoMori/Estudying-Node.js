const porta = 3003 // comunica diretamente com o software q vai receber o dado
// porta padrao do protocolo http:// é a 80
// associação de um numero com um processo
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //urlencoded eh um formato

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
}) // get é uma forma de requisição, send ja converte direto para json

app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON para web
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON para web
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON para web
})






app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
}) // o segundo parametro eh um callback

