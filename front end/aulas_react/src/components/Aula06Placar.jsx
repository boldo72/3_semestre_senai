import { useState } from 'react'
import { estilos } from '../Style/estilos'

const Aula06Placar = () => {
    const [placarFutebol1, setPlacarFutebol1] = useState(0);
    const [placarFutebol2, setPlacarFutebol2] = useState(0);
    const [placar1, setPlacar1] = useState(0);
    const [placar2, setPlacar2] = useState(0);


    function limpar1() {
        setPlacarFutebol1(0)
        setPlacarFutebol2(0)
    }
    function limpar2() {
        setPlacar1(0)
        setPlacar1(0)
        setPlacar1(0)
        setPlacar2(0)
        setPlacar2(0)
        setPlacar2(0)
    }


    return (
        <div>
            <h1>Placar Eletronico</h1>
            <h3>Futebol</h3>



            <p>Time 1: {placarFutebol1} </p>
            <button onClick={() => setPlacarFutebol1(placarFutebol1 + 1)} style={estilos.botaoLimpar}>+ 1 ponto</button>

            <p>Time 2: {placarFutebol2} </p>
            <button onClick={() => setPlacarFutebol2(placarFutebol2 + 1)} style={estilos.botaoLimpar}>+ 1 ponto</button>

             <button onClick={limpar1} style={estilos.botaoLimpar}>Limpar</button>
            <div>
               
            <h3>Basquete🏀</h3>



            <p>Time 1: {placar1} </p>
            <button onClick={() => setPlacar1(placar1 + 1)} style={estilos.botaoLimpar}>+ 1 </button>
            <button onClick={() => setPlacar1(placar1 + 2)} style={estilos.botaoLimpar}>+ 2</button>
            <button onClick={() => setPlacar1(placar1 + 3)} style={estilos.botaoLimpar}>+ 3</button>

            <p>Time 2: {placar2} </p>
            <button onClick={() => setPlacar2(placar2 + 1)} style={estilos.botaoLimpar}>+ 1 </button>
            <button onClick={() => setPlacar2(placar2 + 2)} style={estilos.botaoLimpar}>+ 2</button>
            <button onClick={() => setPlacar2(placar2 + 3)} style={estilos.botaoLimpar}>+ 3</button>
             <button onClick={limpar2} style={estilos.botaoLimpar}>Limpar</button>
            </div>
        </div>
    )
}

export default Aula06Placar