import { estilos } from "../Style/estilos"
import Aula07_Muliticomponentes, {enderecoServidor, MeuComponete, MeuComponete2} from "./Aula07_Muliticomponentes"
import Aula07_PERFIL from "./Aula07_PERFIL"
const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 07 - exportação e importação de modulod</h2>
            <h3>Compreendendo impotaação e exportação padrão ou nomeada</h3>
            <hr />
            <Aula07_Muliticomponentes />
            <MeuComponete />
            <MeuComponete2 />
            <Aula07_PERFIL />
            <p>{enderecoServidor}</p>
        </div>
    )
}












export default Aula07