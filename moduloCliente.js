const moduloA = require('./moduloA')
// ./ caminho relativo de outro modulo
// require faz uma requisição

const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)


console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)