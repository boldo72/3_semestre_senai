import { estilos } from "../Style/estilos"
import Aula11_Cadastro from "./Aula11Cadastros_produtos"


const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 - cadastro de produtos  </h2>
            <h3>criando uma lista de produtos e armazenando em dados localmente</h3>
            <hr />
            <Aula11_Cadastro />
        </div>
    )
}

export default Aula11