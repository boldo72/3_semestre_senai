import '../Style/Aula03.css'
import { estilos } from '../Style/estilos'
import Aula03_login from './Aula03_login'




const Aula03 = () => {
    return (

        <div>
            <div style={estilos.cardAula}>
                <h2>Aula 03 - componentes e estabilização </h2>
                <h3>Criação de componentes reutilizaveis e seus estilizações </h3>
                <p>Aprendendo a criar e reutilizar componentes e estilizações para melhorar a UI</p>

                <hr />
                <p className="texto">CSS esterno</p>
                <p>a forma mais simples para estilizar uma pagina </p>

                <hr />
                <p style={{ color: 'blue', fontWeight: 'bold' }}>estilização inline </p>
                <p style={{ fontStyle: 'italic' }}>estilos aplicados diretamente nos elementos como objetos  </p>

                <hr />
                <p style={estilos.titulomodulo}>CSS modules</p>
                <p style={estilos.descriçãomodulo}>CSS modularizados é a forma mais comum para mobile</p>

                <hr />
                <Aula03_login />
            </div>
  
        </div>
    )
}




export default Aula03