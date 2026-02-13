import Cabecario from "./components/Cabecario"
import Aula01 from "./components/Aula01"
import Aula02 from "./components/Aula02"
import Aula03 from "./components/Aula03"
import Aula04 from "./components/Aula04"
import Aula05 from "./components/Aula05"
import { estilos } from "./Style/estilos"

const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecario aula="aula" />
      <main style={estilos.conteudo}>
        <h2>aula</h2>
        <div style={estilos.lista_aulas}>
          {/* conteudo da aula */}
          <Aula01 />
          <Aula02 />
          <Aula03 />
          <Aula04 />
          <Aula05 />
        </div>
      </main>
    </div>
  )

}



export default App