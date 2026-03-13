import { estilos } from "../Style/estilos"
import { useState } from "react";


const Perfil = () => {
    return (
        <div>
            <p>Perfil</p>
            <Imagem />

        </div>
    )
}

export const Imagem = () => {
    return (
        <div style={estilos.cardPerfil}>
            <img src="https://i.pinimg.com/736x/ce/b7/e7/ceb7e78f401fb1ad1da148dbd4fc2a9f.jpg" alt="" style={estilos.imagemPerfil} />
            <Paragrafo />
            <Botao />
        </div>
    )
}

export const Paragrafo = () => {
    return (
        <div>
            <p style={estilos.paragrafoBranco}>boldo</p>
        </div>
    )
}

export const Botao = () => {
    const [Seguir, setSeguir] = useState(false)

    return (
        <div>
            <button onClick={() => setSeguir(!Seguir)} style={{
                backgroundColor: Seguir == false ? "#0093fc" : "#003cff",
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: 8,
                cursor: 'pointer'
            }}>
                {Seguir == false ? 'seguir ' : 'seguindo'}</button>
        </div>
    )
}

//export {Meucomponente, Meucomponente2, enderecoServidor}
export const enderecoServidor = 'localhost'

export default Perfil
