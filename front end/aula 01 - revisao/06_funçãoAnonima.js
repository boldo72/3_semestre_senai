// função nomeada
function saudacao(nome) {
    console.log(`tenha uma boa dia ${nome}`)
}
saudacao('Boldo')

//funcao anonima
const saudacao2 = function (nome) {
    console.log(`tenha uma boa dia ${nome}`)
}
saudacao('boldo')

//funcao nomeada
function soma(a, b) {
    return a + b
}
soma(2, 3)
//funcao anonima
const soma2 = function (a, b) {
    return a + b
}
soma2(2, 3)