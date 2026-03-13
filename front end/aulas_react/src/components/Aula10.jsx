import { useState, useEffect } from "react"
import { estilos } from "../Style/estilos"

const Aula10 = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Voce clicou ${contador} vezes`
    }, [contador])

    useEffect(() => {
        const contadorSalvo = localStorage.getItem('valorContador') || 0
        setContador(JSON.parse(contadorSalvo))
    }, [])


    

    function botaoContador() {
        const novoContador = contador + 1
        setContador(contador + 1)
        localStorage.setItem('valorContador', JSON.stringify(novoContador))
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10