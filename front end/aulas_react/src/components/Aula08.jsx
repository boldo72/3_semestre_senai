import jogo from '../assets/jogo.png'
import { estilos } from "../Style/estilos"

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}> 
            <h2>Aula 08 - Componentes</h2>
            <h3>Componentes reutilizaveis</h3>
            <img src={jogo} style={estilos.botaolimpar} />
            <button style={estilos.botaolimpar}>
                <a href="https://jogo-numero-secreto-nu-ten.vercel.app/">jogar</a> 
            </button>
        </div>
    )
}

export default Aula08