import { estilos } from "../Style/estilos"
import Aula04_IMC from "./Aula04_IMC"
import Aula04_filme from "./Aula04_filme"

const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 04 - Props</h2>
            <h3>Criação de componentes reutitlizaveis e suas estilizações</h3>
            <Aula04_IMC nome = "boldo" peso = {115} altura = {1.87} cor = "#25f6c1"/>
            <hr />
             <div style={{display: "flex", flexWrap: 'wrap', gap: 20}}>
            <Aula04_filme imagem={'https://i.pinimg.com/736x/b0/0d/d1/b00dd1f45211a0054731e8b8db97db83.jpg'} titulo={'Velozes e Furiosos X'} ano={2023}  />
            <Aula04_filme imagem={'https://i.pinimg.com/736x/66/52/10/6652108a85b864b83d8511494748996f.jpg'} titulo={'Homem Aranha: Longe de casa'} ano={2021} />
            <Aula04_filme imagem={'https://ingresso-a.akamaihd.net/prd/img/movie/five-nights-at-freddys-2/3d32e64a-c91b-4b19-a986-d4fd9374e71a.webp'} titulo={'Five Nights at Freddy 2'} ano={2025} />
            </div>
        </div>
    )
}

export default Aula04