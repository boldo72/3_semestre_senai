const pais = {
    'nome': 'Brasil',
    'populacao': 200,
    'idioma': 'Portugues',
    'regiao' : {
        'sudoeste': 'sao paulo / rio de janeiro / minas gerais / esprito santo',
        'sul' : 'rio grande do sul / parana / santa catarina',
        'norte' : 'acre / amazonas / rondonia / para',
    }
}
console.log(pais.idioma);
console.log(pais.regiao.sul);

let {nome, captal, populacao, idioma} = pais
console.log(nome, captal, populacao, idioma)
