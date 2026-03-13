import { estilos } from "../Style/estilos";
import { useState } from "react";
import Aula06Contador from "./Aula06Contador";
import Aula06Placar from "./Aula06Placar";
import Aula06Calculadora from "./Aula06Calculadora";
const Aula06 = () => {
    const [nome, setNome] = useState("")
    const [cidade, setCidade] = useState("")
    const [Telefone, setTelefone] = useState("")
    const [visivel, setVisivel] = useState(false)

    function limpar() {
        setNome("")
        setCidade("")
        setTelefone("")
    }






    return (
        <div style={estilos.cardAula}>
            <h2>Aula06 - estado de um componemte</h2>
            <h3>o hook useState adiciona estado de componemte funcionais</h3>
            '''         <hr />
            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} style={estilos.input} />
            <input type="text" onChange={(event) => setCidade(event.target.value)} value={cidade} style={estilos.input} />
            <input type="text" onChange={(event) => setTelefone(event.target.value)} value={Telefone} style={estilos.input} />
            <p>Ola {nome} você mora em  {cidade} seu telefone é {Telefone}</p>
            <button onClick={limpar} style={estilos.botaoLimpar}>Limpar</button>

            <button onClick={() => setVisivel(!visivel)} style={estilos.botaoLimpar}>
                {visivel == false ? 'saldo oculto 🔒' : 'saldo visivel 👀'}</button>
            {visivel == false ? <p>R$ ****,**</p> : <p style={{ color: 'green' }}>R$1587,32</p>}
            {visivel == false ? <p>saldo oculto</p> : <p style={{ color: 'green' }}>saldo visivel</p>}
            <hr />
            <div style={estilos.cardAula}>
                <Aula06Contador />
                <Aula06Placar />
                <Aula06Calculadora />
            </div>
        </div>
    )
}

export default Aula06