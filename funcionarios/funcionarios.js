const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//let parabObjeto = json => JSON.parse(json) // json para objeto
function getChina (funcionarios){
    return funcionarios.pais == "China"
}
function getMulher (funcionarios){
    return funcionarios.genero == "F"
}
function menorSalario(func, funcAtual){
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const resultado = funcionarios.filter(getChina).filter(getMulher).reduce(menorSalario)
    console.log(resultado)

})


/* DESAFIO
Mulher chinesa menor salário

"pais": "China"
.pais
"salario": menor possível <-???? Number.MIN_VALUE
.salario

funcionarios.pais


function getChina (funcionarios){
    funcionarios.pais == "China"
}

*/