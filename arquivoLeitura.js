const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... [CUIDADO PODE TRAVAR, PQ ELE PRECISA LER O ARQUIVO PRIMEIRO PRA DPS LIBERAR]
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... 

fs.readFile(caminho, 'utf-8', (err, conteudo)=> {
    const config = JSON.parse(conteudo) // transformar string em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // ja converte pra objeto
console.log(config.db)

// __dirname constante presente em todos os modulos
// __dirname representa o diretório atual

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
