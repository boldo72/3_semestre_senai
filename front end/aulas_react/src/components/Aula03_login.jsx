import { useState } from 'react'



const Aula03_login = () => {
    const [email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [Mensagem, setMensagem] = useState("")

    const botaoEntrar = () => {
        if (email == "boldo@sesi.br" && Senha == "122") {
            setMensagem("Login efetuado com sucesso")
        } else {
            setMensagem("Login ou senha incorretos")
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <div style={estilos.cardLogin}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbde4nriDD9cTH89oI4wefdHBvHXZtappHGA&s" alt="" />
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="email" style={estilos.input} onChange={(event) => setEmail(event.target.value)} value={email} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="password" placeholder="senha" style={estilos.input} onChange={(event) => setSenha(event.target.value)} value={Senha} />
                </div>
                <button style={estilos.button} onClick={botaoEntrar}>entrar</button>
                <p>{Mensagem}</p>
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

