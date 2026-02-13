const lista_filme = ({ imagem, titulo, ano }) => {
    return (
        <div style={estilos.loginConteudo}>
            <div>
                <img src={imagem} style={estilos.logo} />
                <h2 style={estilos.textoGeral}>{titulo}</h2>
                <h3 style={estilos.textoGeral}>{ano}</h3>
                <button style={estilos.button}>ver detalhes</button>
            </div>
        </div>
    )
}
const estilos = {
    loginConteudo: {
        display: 'flex',
        width: 300,
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
        borderRadius: 8,
        gap: '5px',
        marginTop: '10px',


    },
    logo: {
        height: '50vh'
    },
    button: {
        width: '100%',
        backgroundColor: 'red',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        maxWidth: 246,
        flexDirection: 'column'
    },
    textoGeral: {
        marginBottom: 8
    }
}

export default lista_filme
