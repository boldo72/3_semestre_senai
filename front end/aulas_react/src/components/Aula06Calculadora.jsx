import { useState } from "react"
import { estilos } from "../Style/estilos"






const Aula06Calculadora = () => {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operador, setOperador] = useState('+')
    const [resultado, setResultado] = useState('')

    const calcular = () => {
        switch (operador) {
            case '+':
                setResultado(parseFloat(numero1) + parseFloat(numero2));
                break;
            case '-':
                setResultado(parseFloat(numero1) - parseFloat(numero2));
                break;
            case '*':
                setResultado(parseFloat(numero1) * parseFloat(numero2));
                break;
            case '/':
                setResultado(parseFloat(numero1) / parseFloat(numero2));
                break;
            default:
                setResultado('Operador inválido');
        }
    }

    return (
        <div>
            <h2>Aula 06 - Calculadora</h2>
            <div>
                <label>Numero 1:</label>
                <input type="number" value={numero1} onChange={(event) => setNumero1(event.target.value)} style={estilos.input} />
            </div>
            <div>
                <label>Numero 2:</label>
                <input type="number" value={numero2} onChange={(event) => setNumero2(event.target.value)} style={estilos.input} />
            </div>
            <div>
                <label>Operador:</label>
                <select value={operador} onChange={(event) => setOperador(event.target.value)}>
                    <option value="+" style={estilos.option}>+</option>
                    <option value="-" style={estilos.option}>-</option>
                    <option value="*" style={estilos.option}>*</option>
                    <option value="/" style={estilos.option}>/</option>
                </select>
            </div>
            <button onClick={calcular} style={estilos.botaoLimpar}>Calcular</button>
            <p>Resultado: {resultado}</p>
        </div>
    )
}

export default Aula06Calculadora