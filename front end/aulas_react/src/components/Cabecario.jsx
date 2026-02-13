import logoReactfrom from '../assets/react.svg'
import '../Style/Cabecalho.css'

const Cabecario = ({ aula }) => {
    return (
        <header className="cacalho">
            <img src={logoReactfrom} alt="logo react" />
            <div>
                <h1>Senai - Desenvolvimento de Sistemas</h1>
                <p>Aulas de Front end - {aula}</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1280px-SENAI_S%C3%A3o_Paulo_logo.png" alt="" />
        </header>
    )
}

export default Cabecario