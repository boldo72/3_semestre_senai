const Aula04_IMC = ({nome, peso, altura, cor}) => {
    
    //let nome = "boldo"
    //let peso = 115
    //let altura = 1.87
    let imc = peso / (altura * altura)
    
    
    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <p style={{color: cor}}>Nome: {nome}</p>
            <p>Peso: {peso}</p>
            <p>Altura: {altura}</p>
            <p>IMC: {imc.toFixed(1)} kg/m²</p>
        </div>
    )
}

export default Aula04_IMC