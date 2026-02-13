const Aula03_login = () => {
    return (
        <div style={estilos.loginConteudo}>
            <div style={estilos.cardLogin}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbde4nriDD9cTH89oI4wefdHBvHXZtappHGA&s" alt="" />
                <h1>Login</h1>
                <div>
                <label>Email</label>
                <input type="text" placeholder="email" style={estilos.input}/>
                </div>
                <div>
                <label>Email</label>
                <input type="password" placeholder="senha" style={estilos.input} />
                </div>
                <button style={estilos.button}>entrar</button>
            </div>
        </div>
    )
}


/** @type {{ [key: string]: import('react').CSSProperties }} */


const estilos = {
    cardLogin: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        width: "100%",
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16
        
    },
    cardInput: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        width: "15%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16
    },
    button: {
        backgroundColor: "red",
        color: "white",
        borderRadius: 8,
        padding: "10px 20px",
        cursor: "pointer",
        border: "none",
        marginTop: 16
    },
    input: {
        padding: "10px",
        borderRadius: 8,
        border: "1px solid #ccc",
        width: "100%",
        marginBottom: 16
    }

}   




export default Aula03_login

