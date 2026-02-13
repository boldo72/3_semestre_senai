import { estilos } from "../Style/estilos"

const Aula05 = () => {
    function botaoClicque() {
        alert('botao clicque')
    }
    function botaoDuploClicque() {
        alert('botao duplo clicque')
    }
    function entradaMouse(event) {
        console.log('mouse entrou ');
        event.target.style.color = 'red'
    }
    function saidaMouse(event) {
        console.log('mouse saiu ');
        event.target.style.color = 'black'
    }
    function alterarcor(event) {
        if (event.key === 'A') {
            event.target.style.color = 'red'
        }
        else if (event.key === 'B') {
            event.target.style.color = 'blue'
        }
        else if (event.key === 'C') {
            event.target.style.color = 'green'
        }

       
    }

     return (
            <div style={estilos.cardAula}>
                <h1>Aula 05 - eventos de um componemte </h1>
                <h3>os eventos são fundamentais para criar intatividade em web</h3>
                <hr />
                <button onClick={botaoClicque}>Clique aqui</button>
                <p onDoubleClick={() => alert('duplo clique')}>este paragrafo recebe um duplo clique</p>

                <hr />

                <p>evento onChange - sempre que um campo deentrada e alterado</p>

                <input onChange={() => alert(event.target.value)} type="text" placeholder="digite algo..." />

                <select onChange={() => alert(event.target.value)}>
                    <option value="1°A">1°A</option>
                    <option value="2°A">2°A</option>
                    <option value="3°A">3°A</option>
                    <option value="3°B">3°B</option>
                </select>

                <hr />

                <p>evento onMouseOver - onMouseleave</p>
                <p onMouseOver={entradaMouse} onMouseLeave={saidaMouse}>mouse aqui</p>

                <hr />

                <p>evento onKeyDown - onKeyUp</p>
                <input type="text" onKeyDown={(event) => alert(event.key)} />
                <input type="text" onKeyDown={alterarcor} />
                <hr />

                <Aula05exe />
            </div>
        )
}

export default Aula05