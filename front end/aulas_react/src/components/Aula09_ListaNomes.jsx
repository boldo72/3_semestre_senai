import { useState, useEffect } from "react"
import Aula09_Nome from "./Aula09_Nome"

const Aula09_ListaNomes = () => {
    // Variável de estado 
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState('')

    function botaoAdicionar() {
        setListaPresenca([...listaPresenca, nome])
        console.log(listaPresenca);
        localStorage.setItem('presenca', JSON.stringify([...listaPresenca, nome]))
    }

    function botaoLimpar() {
        setListaPresenca([])
        localStorage.setItem('presenca', JSON.stringify([]))
    }

    useEffect(() => {
        const listaSalva = localStorage.getItem('presenca') || "[]"
        setListaPresenca(JSON.parse(listaSalva))
    }, [])


    return (
        <div>
            <h1>Lista de Presença do Churrasco</h1>
            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
            <button onClick={botaoAdicionar}>Adicionar</button>

            {
                listaPresenca.map((pessoa, index) => (
                    <Aula09_Nome key={index} pessoa={pessoa} />
                ))

            }
            <button onClick={botaoLimpar}>Limpar</button>
        </div>
    )
}

export default Aula09_ListaNomes