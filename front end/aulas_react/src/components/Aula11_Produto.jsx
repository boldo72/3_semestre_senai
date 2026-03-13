const Aula11_Produto = ({produto}) => {
    return (
        <div style={estilos.cardProduto}>
            <img src={produto.produtoImagem} alt="" style={estilos.img} />
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)}</p>
            {produto.freteGratuito && <p style={estilos.freteGratis}>Frete Gratuito</p>}
            <p>{produto.categoria}</p>
            <a href={produto.link} style={estilos.botao}>ver pruduto</a>
        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },


    img: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    nome: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula11_Produto