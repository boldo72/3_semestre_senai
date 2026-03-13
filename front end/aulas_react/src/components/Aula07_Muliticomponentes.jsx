


const Aula07_Muliticomponentes = () => {
    return (
        <div>
            <p>Meu componente padrão</p>
            <MeuComponete />
            <MeuComponete2 />
        </div>
    )
}

 export const MeuComponete = () => {
    return (
        <div>
            <p>Meu componente nomeado 1</p>
        </div>
    )
}

export const MeuComponete2 = () => {
    return (
        <div>
            <p>Meu componente nomeado 2</p>
        </div>
    )
}

//export {Meucomponente, Meucomponente2, enderecoServidor}
    export const enderecoServidor = 'localhost'

export default Aula07_Muliticomponentes
