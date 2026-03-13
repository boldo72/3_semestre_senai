import { useState } from "react";
import { estilos } from "../Style/estilos";

const Aula06Contador = () => {
    const [contador, setContador] = useState(0);
    if (contador < 0) {
        setContador(contador - 1);
    }


    return (
        <div>
            <h2>Aula06 - Contador</h2>
            <h3>o hook useState adiciona estado de componente funcionais</h3>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)} style={estilos.botaoLimpar}>
                +
            </button>

            <button onClick={() =>  setContador(contador - 1)} style={estilos.botaoLimpar}>
            
-       
        
            </button>
        </div>
    );
};
export default Aula06Contador