
const idade = 17

if (idade >= 18) {
    console.log("maior de idade")
} else if (idade > 12 && idade < 17) {
    console.log("você é adolescente")
}else if (idade < 12) {
    console.log("você é um criança")
}

// operador ternario 
let tema = 'dark';
let corFundo = 'white';
if (tema === 'dark') {
    corFundo = 'black';
}

tema == 'dark' ? corFundo = 'black' : corFundo = 'white'
