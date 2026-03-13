import { useState } from "react"
import { estilos } from "./GameEstilos"

const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero)
    const [chute, setChute] = useState('')
    const [Mensagem, setMensagem] = useState('Adivinhe um numero de 0 a 100')
    const [Tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1
    }
    function botaoChutar() {
        if (numeroSecreto == chute) {
            setMensagem(`Parabens voce acertou em ${Tentativas} tentativas 🏀⚡`)
            setJogoFinalizado(true)
        } else if (numeroSecreto < chute) {
            setMensagem(`você chutou ${chute} e o numero secreto é menor`)
            setChute('')
            setTentativas(Tentativas + 1)
        } else {
            setMensagem(`você chutou ${chute} e o numero secreto é maior`)
            setChute('')
            setTentativas(Tentativas + 1)
        }
        }

        function botaoNovoJogo() {
            setChute('')
            setJogoFinalizado(false)
            setTentativas(1)
            setMensagem('Adivinhe um numero de 0 a 100')
            setNumeroSecreto(sortearNumero)
        }




                return (
                    <section style={estilos.container}>
                        <div style={estilos.conteudo}>
                            <div style={estilos.informacoes}>
                                <div style={estilos.texto}>
                                    <h1 style={estilos.h1}>jogo numero secreto</h1>
                                    <p style={estilos.mensagem}>{Mensagem}</p>
                                </div>
                                <input onChange={(envent) => setChute(envent.target.value)} value={chute}
                                    type="number" style={estilos.chute} />
                                <div style={estilos.botoes}>
                                    <button style={estilos.botao} onClick={botaoChutar}>chutar</button>
                                    <button style={estilos.botao} onClick={botaoNovoJogo}>Novo jogo</button>
                                </div>
                            </div>
                            <img src="./img/ia.png" alt="" style={estilos.imagem} />
                        </div>
                    </section>

                )
            }

            export default Game