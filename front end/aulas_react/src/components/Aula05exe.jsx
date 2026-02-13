import { estilos } from "../Style/estilos"

const exercicio = () => {
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
        <div>
            <button onClick={botaoClicque}>Clique aqui</button>
            <button onClick={botaoClicque}>Clique aqui</button>
            <hr />
            <input onChange={() => alert(event.target.value)} type="text" placeholder="digite algo..." />
            <hr />
            <p onMouseOver={entradaMouse} onMouseLeave={saidaMouse}>mouse aqui</p>
            <hr />
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <hr />
            
        </div>
    )
}